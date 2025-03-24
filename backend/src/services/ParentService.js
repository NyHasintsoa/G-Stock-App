import generateId from "../utils/generateId.js";

class ParentService {
  /**
   * @type {import("sequelize").Sequelize}
   */
  _sequelize;

  _model;

  /**
   * Get All Fields
   * @return {Promise}
   */
  async getAll() {
    return await this._model.findAll();
  }

  /**
   * Get Fields By Id
   * @param {String} id Primary key
   * @return  {Promize}
   */
  async getById(id) {
    const result = await this._model.findByPk(id);
    if (result === null) throw new Error("Not Found");
    return result;
  }
}

export default ParentService;
