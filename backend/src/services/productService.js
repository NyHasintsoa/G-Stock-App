import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import generateId from "../utils/generateId.js";
import { deleteUploadedFile, uploadPath } from "../utils/pathConfig.js";
import ParentService from "./ParentService.js";
import ProductModel from "../models/ProductModel.js";
import CategoryModel from "../models/CategoryModel.js";
import SupplierModel from "../models/SupplierModel.js";
import TypeModel from "../models/TypeModel.js";
import CategoryService from "./CategoryService.js";

class ProductService extends ParentService {
  _model = ProductModel;

  #categoryService;

  #productOption = {
    attributes: {
      exclude: ["supplierId", "typesProductId"]
    },
    include: [
      {
        model: CategoryModel,
        attributes: {
          exclude: ["products_categories"]
        }
      },
      { model: SupplierModel },
      { model: TypeModel }
    ]
  };

  constructor() {
    super();
    this.#categoryService = new CategoryService();
  }

  async getAll() {
    return await this._model.findAll(this.#productOption);
  }

  /**
   * Get Product By Id
   * @param {string} id Product Id
   */
  async getById(id) {
    const product = await this._model.findByPk(id, this.#productOption);
    if (product === null) throw new Error("Product Not Found");
    return product;
  }

  /**
   * Get Paged Product
   * @param {import("fastify").FastifyRequest} req Reqeust from fastify
   * @return {Object}
   */
  async getAndCountAll(req) {
    let { page, size } = req.query;
    page = !isNaN(page) ? page : 1;
    this._rowLimit = !isNaN(size) ? parseInt(size) : 10;
    const { count, rows } = await this._model.findAndCountAll({
      limit: this._rowLimit,
      offset: (parseInt(page) - 1) * this._rowLimit,
      attributes: {
        exclude: ["supplierId", "typesProductId"]
      },
      include: [
        {
          model: CategoryModel,
          attributes: {
            exclude: ["products_categories"]
          }
        },
        { model: SupplierModel },
        { model: TypeModel }
      ]
    });
    return {
      rows,
      page: {
        size: this._rowLimit,
        currentPage: parseInt(page),
        totalElements: count,
        totalPages: Math.ceil(count / this._rowLimit)
      }
    };
  }

  /**
   * Add product to the database
   * @param {Object} req Request from client
   */
  async addProduct(req) {
    const categories = [];
    for await (const categoryId of req.categoriesId) {
      categories.push(await this.#categoryService.getById(categoryId));
    }
    const product = await this._model.create({
      id: generateId(req.name),
      name: req.name,
      price: req.price,
      description: req.description,
      supplierId: req.supplierId,
      typesProductId: req.typesProductId,
      CategoryModels: categories
    });
    product.addCategoryModels(categories);
    return product;
  }

  /**
   * Update Product By Id
   * @param {Object} req Request body
   * @param {string} productId Product Id
   */
  async updateProduct(req, productId) {}

  /**
   * Upload Product Image To the disk
   * @param {import("fastify").FastifyRequest} req Request from client
   * @param {string} productId Product Id
   */
  async uploadImage(req, productId) {}
}

export default ProductService;
