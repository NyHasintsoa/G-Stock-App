import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import generateId from "../utils/generateId.js";
import { deleteUploadedFile, uploadPath } from "../utils/pathConfig.js";

class ProductService {
  /**
   * @type {import("@fastify/mysql").MySQLPromiseConnection} mysqlConnection
   */
  #connection;

  constructor(connection) {
    this.#connection = connection;
  }

  #selectQuery() {
    return (
      "SELECT `product`.`id` AS id,`product`.`designation` AS designation," +
      "`product`.`price` AS price, `product`.`path_img` AS path_img," +
      "`category`.`name` AS category FROM `product` LEFT JOIN `category`" +
      "ON `product`.`category_id` = `category`.`id`"
    );
  }

  async getAll() {
    return await this.#connection.query(this.#selectQuery());
  }

  /**
   * Get Product By Id
   * @param {string} productId Product Id
   */
  async getById(productId) {
    const [result] = await this.#connection.query(
      this.#selectQuery() + " WHERE `product`.`id` = ?",
      [productId]
    );
    if (result.length == 0) throw new Error("Product not found");
    return result[0];
  }

  /**
   * Add product to the database
   * @param {import("fastify").FastifyRequest} req Request from client
   */
  async addProduct(req) {
    await this.#connection.execute(
      "INSERT INTO `product` " +
        "(`id`, `designation`, `price`, `category_id`) " +
        "VALUES (?,?,?,?)",
      [generateId(req.designation), req.designation, req.price, req.category_id]
    );
  }

  /**
   * Upload Product Image To the disk
   * @param {import("fastify").FastifyRequest} req Request from client
   * @param {string} productId Product Id
   */
  async uploadImage(req, productId) {
    const [result] = await this.#connection.query(
      "SELECT * FROM `product` WHERE `id` = ?",
      [productId]
    );
    if (result.length == 0) throw new Error("Product not found");

    /** @type {string} Product Path Image */
    const productImg = result[0].path_img;
    if (productImg !== null) {
      const [folder, file] = productImg.split("/");
      await deleteUploadedFile("products", folder, file);
    }
    const { file, filename } = await req.file();
    const { path, time } = await uploadPath("products", filename);
    await pipeline(file, fs.createWriteStream(path));
    await this.#connection.execute(
      "UPDATE `product` SET `path_img` = ? WHERE `id` = ?",
      [`${time}/${filename}`, productId]
    );
  }
}

export default ProductService;
