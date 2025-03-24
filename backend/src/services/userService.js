import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";

class UserService extends ParentService {
  /**
   * Get User By Id if exist
   * @param {string} userId User id
   * @return {Object}
   */
  async getById(userId) {}

  /**
   * Get User By email if it's exist
   * @param {string} email User's email
   * @return {Object}
   */
  async getByEmail(email) {}

  /**
   * Add User Local to database
   * @param {Object} userInfo User's Informations
   */
  async addUser(userInfo) {}

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
