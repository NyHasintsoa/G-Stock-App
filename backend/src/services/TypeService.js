import ProductModel from "../models/ProductModel.js";
import TypeModel from "../models/TypeModel.js";
import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";

class TypeService extends ParentService {
  _model;

  constructor() {
    super();
    this._model = TypeModel;
  }

  async getProductToTypeById(id) {
    const typeProduct = await this._model.findByPk(id, {
      include: [
        {
          model: ProductModel
        }
      ]
    });
    if (!typeProduct) throw new Error("Type product Not Found");
    return typeProduct;
  }

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
