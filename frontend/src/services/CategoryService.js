import ParentService from "./ParentService.js";

class CategoryService extends ParentService {
  constructor() {
    super("/api/categories");
  }

  /**
   * Get All Products associated to Category
   * @param {string} id Category Id
   * @return {Promise}
   */
  async getProductByCategoryId(id) {
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

const categoryService = new CategoryService();

export default categoryService;
