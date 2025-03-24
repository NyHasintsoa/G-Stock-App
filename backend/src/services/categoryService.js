import CategoryModel from "../models/CategoryModel.js";
import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";

class CategoryService extends ParentService {
  _model = CategoryModel;

  /**
   * Add New Category
   * @param {Object} req Category Fields
   */
  async addCategory(req) {
    await this._model.create({
      id: generateId(req.name),
      name: req.name
    });
  }

  async updateCategoryById(categoryId, req) {
    await this._model.update(
      {
        name: req.name
      },
      {
        where: {
          id: categoryId
        }
      }
    );
  }
}

export default CategoryService;
