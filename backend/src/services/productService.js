import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import generateId from "../utils/generateId.js";
import { deleteUploadedFile, uploadPath } from "../utils/pathConfig.js";
import ParentService from "./ParentService.js";
import ProductModel from "../models/ProductModel.js";
import CategoryModel from "../models/CategoryModel.js";
import SupplierModel from "../models/SupplierModel.js";
import TypeModel from "../models/TypeModel.js";
import CategoryService from "./CategoryService.js";

class ProductService extends ParentService {
  _model;

  #categoryService;

  /** @type {import("sequelize").FindOptions} */
  _findOptions = {
    attributes: {
      exclude: ["supplierId", "typesProductId"]
    },
    include: [
      {
        model: CategoryModel
      },
      {
        model: SupplierModel
      },
      {
        model: TypeModel
      }
    ]
  };

  constructor() {
    super();
    this._model = ProductModel;
    this.#categoryService = new CategoryService();
  }

  /**
   * Add product to the database
   * @param {Object} req Request from client
   */
  async addProduct(req) {
    const categories = [];
    for await (const categoryId of req.categoriesId) {
      categories.push(await this.#categoryService.getById(categoryId));
    }
    const product = await this._model.create({
      id: generateId(req.name),
      name: req.name,
      price: req.price,
      description: req.description,
      supplierId: req.supplierId,
      typesProductId: req.typesProductId
    });
    product.addCategoryModels(categories);
    return product;
  }

  /**
   * Update Product By Id
   * @param {Object} req Request body
   * @param {string} productId Product Id
   */
  async updateProduct(req, productId) {}

  /**
   * Upload Product Image To the disk
   * @param {import("fastify").FastifyRequest} req Request from client
   */
  async uploadImage(req) {
    const { id } = req.params;
    const product = this._model.findByPk(id);
    if (!product) throw new Error("Product not Found");
    const { path_img } = product;
    if (path_img) {
      const [folder, file] = path_img.split("/");
      await deleteUploadedFile("products", folder, file);
    }
    const { file, filename } = await req.file();
    const { path, time } = await uploadPath("products", filename);
    await pipeline(file, fs.createWriteStream(path));
    await this._model.update(
      {
        path_img: `${time}/${filename}`
      },
      {
        where: {
          id
        }
      }
    );
  }
}

export default ProductService;
