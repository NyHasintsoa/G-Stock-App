import bcrypt from "bcryptjs";
import path from "node:path";
import UserService from "./UserService.js";
import { renderTemplate, templateDir } from "../utils/pathConfig.js";

class AuthService {
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

  constructor(fastify) {
    this.#userService = new UserService();
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
      if (!(await this.#verifyPassword(password, user.password)))
        throw new Error("Please check your email or password");
      return this.#generateToken(
        user.id,
        email,
        user.username,
        user.profile_image
      );
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
  #generateToken(id, email, username, profile_image) {
    const token = this.#fastify.jwt.sign({
      id,
      email,
      username,
      profile_image
    });
    return {
      token,
      userInfo: {
        id,
        email,
        username,
        profile_image
      }
    };
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

  /**
   * Send Mail to recovery account by email
   * @param {Object} req Request Body
   */
  async sendMailAccountRecovery(req) {
    const { email } = req;
    const token = this.#fastify.jwt.sign({
      email
    });
    const FRONTEND_URL = process.env.FRONTEND_URL;
    const html = await renderTemplate(
      path.join(templateDir, "emails", "recovery-account.ejs"),
      { email, token, FRONTEND_URL }
    );
    await this.#fastify.mailer.sendMail({
      to: email,
      subject: "Account Recovery",
      html
    });
  }
}

export default AuthService;
