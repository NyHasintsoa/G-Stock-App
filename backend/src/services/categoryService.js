import generateId from "../utils/generateId.js";

class CategoryService {
  /**
   * @type {import("@fastify/mysql").MySQLPromiseConnection} mysqlConnection
   */
  #connection;

  constructor(connection) {
    this.#connection = connection;
  }

  async getAll() {
    return await this.#connection.query("SELECT * FROM category");
  }

  async getById(categoryId) {
    const [result] = await this.#connection.query(
      "SELECT * FROM category WHERE id = ?",
      [categoryId]
    );
    if (result.length == 0) throw new Error("Category not found");
    return result[0];
  }

  async addCategory(req) {
    await this.#connection.execute(
      "INSERT INTO `category` (`id`, `name`) VALUES (?,?)",
      [generateId(req.name), req.name]
    );
  }

  async updateCategoryById(categoryId, req) {
    await this.#connection.execute(
      "UPDATE `category` SET `name` = ? WHERE `category`.`id` = ?",
      [req.name, categoryId]
    );
  }
}

export default CategoryService;
