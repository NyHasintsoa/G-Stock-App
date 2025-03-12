import generateId from "../utils/generateId.js";

class UniteService {
  /**
   * @type {import("@fastify/mysql").MySQLPromiseConnection} mysqlConnection
   */
  #connection;

  constructor(connection) {
    this.#connection = connection;
  }

  async getAll() {
    return await this.#connection.query("SELECT * FROM unite");
  }

  async getById(uniteId) {
    const [result] = await this.#connection.query(
      "SELECT * FROM unite WHERE id = ?",
      [uniteId]
    );
    if (result.length == 0) throw new Error("Unite not found");
    return result[0];
  }

  async addUnite(req) {
    await this.#connection.execute(
      "INSERT INTO `unite` (`id`, `name`) VALUES (?,?)",
      [generateId(req.name), req.name]
    );
  }

  async updateUniteById(uniteId, req) {
    await this.#connection.execute(
      "UPDATE `unite` SET `name` = ? WHERE `unite`.`id` = ?",
      [req.name, uniteId]
    );
  }
}

export default UniteService;
