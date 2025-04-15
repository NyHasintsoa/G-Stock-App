import { ApiError } from "../utils/api.js";
import ParentService from "./ParentService.js";

class ProductService extends ParentService {
  constructor() {
    super("/api/products");
  }

  /**
   * Make Request to add product to database
   * @param {Object} dataForm Data from the client input
   * @return {Boolean}
   */
  async addProduct(dataForm) {
    const response = await fetch(`${this._backendUrl + this._requestPrefix}`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        name: dataForm.name,
        price: dataForm.price,
        supplierId: dataForm.supplierId,
        typesProductId: dataForm.typesProductId,
        description: dataForm.description,
        categoriesId: dataForm.categoriesId
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const { data } = await response.json();
    if (dataForm["product-image"].length > 0) {
      const formData = new FormData();
      formData.append("product-image", dataForm["product-image"][0]);
      await this.uploadProductImage(data.id, formData);
    }
    if (response.ok) return true;
    throw new ApiError(response.status, await response.json());
  }

  /**
   * Request for updating Product By id
   * @param {string} idProduct Product Id
   * @param {Object} dataForm Data form from client input
   * @return {Boolean}
   */
  async updateProductById(idProduct, dataForm) {
    const response = await fetch(
      `${this._backendUrl + this._requestPrefix}/${idProduct}`,
      {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify({
          name: dataForm.name,
          price: dataForm.price,
          supplierId: dataForm.supplierId,
          typesProductId: dataForm.typesProductId,
          description: dataForm.description,
          categoriesId: dataForm.categoriesId
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    );
    if (dataForm["product-image"].length > 0) {
      const formData = new FormData();
      formData.append("product-image", dataForm["product-image"][0]);
      await this.uploadProductImage(idProduct, formData);
    }
    if (response.ok) return true;
    throw new ApiError(response.status, await response.json());
  }

  /**
   * Upload Image and save it to the database
   * @param {String} productId Product id
   * @param {FormData} data Image Product
   * @return {Promise}
   */
  async uploadProductImage(productId, data) {
    const r = await fetch(
      `${this._backendUrl + this._requestPrefix}/upload/${productId}`,
      {
        method: "PUT",
        credentials: "include",
        body: data,
        headers: {
          Accept: "application/json"
        }
      }
    );
    if (r.ok) return r.json();
    throw new ApiError(r.status, await r.json());
  }

  /**
   * return the value from Selected product
   * @param {string} colProduct Col index String
   * @return {Object}
   */
  selectOption(item, colProduct) {
    return item[colProduct]
      ? {
          value: item[colProduct].id,
          label: item[colProduct].name
        }
      : {};
  }

  getIdBySelectForm(select) {
    return select.value;
  }
}

const productService = new ProductService();

export default productService;
