import ParentService from "./ParentService.js";

class CategoryService extends ParentService {
  _requestPrefix = "/api/categories";
}

const categoryService = new CategoryService();

export default categoryService;
