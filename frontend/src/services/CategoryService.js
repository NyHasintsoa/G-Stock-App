import ParentService from "./ParentService.js";

class CategoryService extends ParentService {
  constructor() {
    super("/api/categories");
  }
}

const categoryService = new CategoryService();

export default categoryService;
