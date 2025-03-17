import generateId from "../utils/generateId.js";

class UserService {
  /**
   * @type {import("@fastify/mysql").MySQLPromiseConnection} mysqlConnection
   */
  #connection;

  constructor(connection) {
    this.#connection = connection;
  }

  /**
   * Get All Users
   * @return {Promise}
   */
  async getAll() {
    return await this.#connection.query("SELECT * FROM `users`");
  }

  /**
   * Get User By Id if exist
   * @param {string} userId User id
   * @return {Object}
   */
  async getById(userId) {
    const [result] = await this.#connection.query(
      "SELECT * FROM `users` WHERE id = ?",
      [userId]
    );
    if (result.length == 0) throw new Error("User not found");
    return result[0];
  }

  /**
   * Get User By email if it's exist
   * @param {string} email User's email
   * @return {Object}
   */
  async getByEmail(email) {
    const [result] = await this.#connection.query(
      "SELECT * FROM `users` WHERE email = ?",
      [email]
    );
    if (result.length == 0) throw new Error("User not found");
    return result[0];
  }

  /**
   * Add User Local to database
   * @param {Object} userInfo User's Informations
   */
  async addUser(userInfo) {
    const date = new Date();
    await this.#connection.execute(
      "INSERT INTO `users` " +
        "(`id`,`email`,`username`,`password`,`profile_image`,`created_at`,`updated_at`,`provider`) " +
        "VALUES (?,?,?,?,?,?,?,?) ",
      [
        generateId(userInfo.email),
        userInfo.email,
        userInfo.username,
        userInfo.password,
        userInfo.profile_image ?? null,
        date,
        date,
        "local"
      ]
    );
  }

  /**
   * Add User to database
   * @param {Object} user User's informations
   */
  async checkUserFromGoogle(user) {
    const {
      sub,
      name,
      given_name,
      family_name,
      picture,
      email,
      email_verified
    } = user;
    const [result] = await this.#connection.query(
      "SELECT * FROM `users` WHERE `email` = ? AND `provider`=?",
      [email, "google"]
    );
    if (result.length == 0) {
      await this.#addGoogleUser(email, given_name, picture);
    } else {
      await this.#updateGoogleUser(result[0].id, given_name, picture);
    }
    return {
      email,
      username: given_name,
      profile_image: picture
    };
  }

  async #addGoogleUser(email, username, picture) {
    const date = new Date();
    await this.#connection.execute(
      "INSERT INTO `users` " +
        "(`id`,`email`,`username`,`password`,`profile_image`,`created_at`,`updated_at`,`provider`) " +
        "VALUES (?,?,?,?,?,?,?,?) ",
      [generateId(email), email, username, null, picture, date, date, "google"]
    );
  }

  async #updateGoogleUser(id, username, picture) {
    const date = new Date();
    await this.#connection.execute(
      "UPDATE `users` SET " +
        "`username`=?,`profile_image`=?,`provider`=?," +
        "`updated_at`=? WHERE `id`=?",
      [username, picture, "google", date, id]
    );
  }
}

export default UserService;
