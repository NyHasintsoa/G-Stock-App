import UserModel from "../models/UserModel.js";
import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";

class UserService extends ParentService {
  _model = UserModel;

  /**
   * Get User By email if it's exist
   * @param {string} email User's email
   * @return {Object}
   */
  async getByEmail(email) {
    const result = await this._model.findOne({
      where: { email: email }
    });
    if (!result) throw new Error("User Not Found");
    return result;
  }

  /**
   * Get User By username if it's exist
   * @param {string} username User's username
   * @return {Object}
   */
  async getByUsername(username) {}

  /**
   * Add User Local to database
   * @param {Object} userInfo User's Informations
   */
  async addUser(userInfo) {
    await this._model.create({
      id: generateId(userInfo.email),
      ...userInfo,
      provider: "local",
      roles: "ROLE_USER"
    });
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

  async #addGoogleUser(email, username, picture) {}

  async #updateGoogleUser(id, username, picture) {}
}

export default UserService;
