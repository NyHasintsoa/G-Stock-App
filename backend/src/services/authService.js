import bcrypt from "bcryptjs";
import UserService from "./userService.js";
import fastify from "fastify";

class AuthService {
  /**
   * @type {import("@fastify/mysql").MySQLPromiseConnection} mysqlConnection
   */
  #connection;

  /**
   * @type {{import("fastify").FastifyInstance} fastify}
   */
  #fastify;

  /**
   * @type {UserService}
   */
  #userService;

  /**
   * @type {number}
   */
  #salt = 10;

  constructor(connection, fastify) {
    this.#connection = connection;
    this.#userService = new UserService(connection);
    this.#fastify = fastify;
  }

  /**
   * Sign In User
   * @param {Object} req Request from client
   */
  async signIn(req) {
    const { email, password } = req;
    try {
      const user = await this.#userService.getByEmail(email);
      if (!(await this.#verifyPassword(password, user.password))) {
        throw new Error("Please check your email or password");
      }
      return this.#generateToken(user.email, user.username, user.profile_image);
    } catch (error) {
      throw new Error("Please check your email or password");
    }
  }

  /**
   * Generate Token By Params
   * @param {string} email User email
   * @param {string} username User username
   * @param {string} profile_image url user's picture
   * @return {Object}
   */
  #generateToken(email, username, profile_image) {
    return this.#fastify.jwt.sign(
      {
        email: email,
        username: username,
        profile_image: profile_image
      },
      {
        expiresIn: process.env.JWT_EXPIRATION || "1d"
      }
    );
  }

  /**
   * Sign Up User
   * @param {Object} user Request from client
   */
  async signUp(user) {
    user.password = await bcrypt.hash(user.password, this.#salt);
    this.#userService.addUser(user);
  }

  /**
   * Check if the password is correct
   * @param {string} password Password from client
   * @param {string} hashPassword Hashed Password
   * @return {boolean}
   */
  async #verifyPassword(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
  }

  async authGoogleUser(user) {
    const { email, username, profile_image } =
      await this.#userService.checkUserFromGoogle(user);
    return this.#generateToken(email, username, profile_image);
  }
}

export default AuthService;
