import ParentService from "./ParentService.js";

class SupplierService extends ParentService {
  constructor() {
    super("/api/suppliers");
  }

  /**
   * Get All Products associated to Supplier
   * @param {string} id Supplier Id
   * @return {Promise}
   */
  async getProductBySupplierId(id) {
    const r = await fetch(
      `${this._backendUrl}${this._requestPrefix}/${id}/products`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    );
    if (r.ok) return r.json();
    throw new Error("Error");
  }
}

const supplierService = new SupplierService();

export default supplierService;
