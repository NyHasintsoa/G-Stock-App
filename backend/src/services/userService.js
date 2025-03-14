import generateId from "../utils/generateId.js";

class UserService {
  /**
   * @type {import("@fastify/mysql").MySQLPromiseConnection} mysqlConnection
   */
  #connection;

  constructor(connection) {
    this.#connection = connection;
  }

  async getAll() {
    return await this.#connection.query("SELECT * FROM `users`");
  }

  async getById(userId) {
    const [result] = await this.#connection.query(
      "SELECT * FROM `users` WHERE id = ?",
      [userId]
    );
    if (result.length == 0) throw new Error("User not found");
    return result[0];
  }

  async getByEmail(email) {
    const [result] = await this.#connection.query(
      "SELECT * FROM `users` WHERE email = ?",
      [email]
    );
    if (result.length == 0) throw new Error("User not found");
    return result[0];
  }

  async addUser(userInfo) {
    const date = new Date();
    await this.#connection.execute(
      "INSERT INTO `users` " +
        "(`id`,`email`,`username`,`password`,`profile_image`,`created_at`,`updated_at`) " +
        "VALUES (?,?,?,?,?,?,?) ",
      [
        generateId(userInfo.email),
        userInfo.email,
        userInfo.username,
        userInfo.password,
        userInfo.profile_image ?? null,
        date,
        date
      ]
    );
  }
}

export default UserService;
