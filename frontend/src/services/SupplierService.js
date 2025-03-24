import ParentService from "./ParentService.js";

class SupplierService extends ParentService {
  _requestPrefix = "/api/suppliers";
}

const supplierService = new SupplierService();

export default supplierService;
