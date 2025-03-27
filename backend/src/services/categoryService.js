import CategoryModel from "../models/CategoryModel.js";
import ProductModel from "../models/ProductModel.js";
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

  async getProductToCategoryById(id) {
    const category = await this._model.findByPk(id, {
      include: [
        {
          model: ProductModel,
          attributes: {
            exclude: ["products_categories"]
          }
        }
      ]
    });
    if (category == null) throw new Error("Category not found");
    return category;
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
