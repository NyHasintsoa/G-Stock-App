import SupplierModel from "../models/SupplierModel.js";
import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";

class SupplierService extends ParentService {
  _model = SupplierModel;

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
