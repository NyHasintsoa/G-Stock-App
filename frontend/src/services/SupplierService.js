import ParentService from "./ParentService.js";

class SupplierService extends ParentService {
  constructor() {
    super("/api/suppliers");
  }
}

const supplierService = new SupplierService();

export default supplierService;
