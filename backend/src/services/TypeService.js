import TypeModel from "../models/TypeModel.js";
import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";

class TypeService extends ParentService {
  _model = TypeModel;

  /**
   * Add Type Product
   * @param {Object} req Request body
   */
  async addType(req) {
    await this._model.create({
      id: generateId(req.name),
      name: req.name
    });
  }

  /**
   * Update Product By Id
   * @param {string} typeId Type Product Id
   * @param {Object} req Request Body
   */
  async updateTypeById(typeId, req) {
    await this._model.update(
      {
        name: req.name
      },
      {
        where: {
          id: typeId
        }
      }
    );
  }
}

export default TypeService;
