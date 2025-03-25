import ParentService from "./ParentService.js";

class ProductService extends ParentService {
  constructor() {
    super("/api/products");
  }
}

const productService = new ProductService();

export default productService;
