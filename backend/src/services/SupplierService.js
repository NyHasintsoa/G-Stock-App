import ProductModel from "../models/ProductModel.js";
import SupplierModel from "../models/SupplierModel.js";
import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";

class SupplierService extends ParentService {
  _model = SupplierModel;

  async getProductToSupplierById(id) {
    const supplier = await this._model.findByPk(id, {
      include: [
        {
          model: ProductModel
        }
      ]
    });
    if (supplier == null) throw new Error("Supplier Not found");
    return supplier;
  }

  /**
   * Add Supplier
   * @param {Object} req Request body
   */
  async addSupplier(req) {
    await this._model.create({
      id: generateId(req.name),
      name: req.name,
      address: req.address,
      description: req.description
    });
  }
}

export default SupplierService;
