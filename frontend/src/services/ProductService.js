import ParentService from "./ParentService.js";

class ProductService extends ParentService {
  constructor(requestPrefix) {
    super(requestPrefix);
  }
}

const productService = new ProductService("/api/products");

export default productService;
