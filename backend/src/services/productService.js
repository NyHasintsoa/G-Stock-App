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
import StockModel from "../models/StockModel.js";
import sequelize from "../models/DatabaseConnection.js";

class ProductService extends ParentService {
  _model;

  #categoryService;

  #stockModel;

  /** @type {import("sequelize").FindOptions} */
  _findOptions = {
    attributes: {
      exclude: ["supplierId", "typesProductId"]
    },
    include: [
      {
        model: CategoryModel
      },
      {
        model: SupplierModel
      },
      {
        model: TypeModel
      },
      {
        model: StockModel
      }
    ]
  };

  constructor() {
    super();
    this._model = ProductModel;
    this.#stockModel = StockModel;
    this.#categoryService = new CategoryService();
  }

  /**
   * Add product to the database
   * @param {Object} req Request from client
   * @return {Object} Product Informations
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
      typesProductId: req.typesProductId
    });
    product.addCategoryModels(categories);
    return product;
  }

  /**
   * Update Product By Id
   * @param {Object} req Request body
   * @param {string} productId Product Id
   * @return {Object} Product Informations
   */
  async updateProduct(req, productId) {
    const product = await this._model.findByPk(productId);
    if (!product) throw new Error("Product not found !");
    await product.setCategoryModels([]);
    if (req.categoriesId && req.categoriesId.length > 0) {
      const categories = await Promise.all(
        req.categoriesId.map(async (categoryId) => {
          return await this.#categoryService.getById(categoryId);
        })
      );
      await product.addCategoryModels(categories);
    }
    await product.update({
      name: req.name,
      price: req.price,
      description: req.description,
      supplierId: req.supplierId,
      typesProductId: req.typesProductId
    });
    return await product.save();
  }

  /**
   * Upload Product Image To the disk
   * @param {import("fastify").FastifyRequest} req Request from client
   */
  async uploadImage(req) {
    const { id } = req.params;
    const product = this._model.findByPk(id);
    if (!product) throw new Error("Product not Found !");
    const { path_img } = product;
    if (path_img) {
      const [folder, file] = path_img.split("/");
      await deleteUploadedFile("products", folder, file);
    }
    const { file, filename } = await req.file();
    const { path, time } = await uploadPath("products", filename);
    await pipeline(file, fs.createWriteStream(path));
    await this._model.update(
      {
        path_img: `${time}/${filename}`
      },
      {
        where: {
          id
        }
      }
    );
  }

  async getStockProducts() {
    return this.#stockModel.findAll({
      include: [
        {
          model: ProductModel
        }
      ]
    });
  }

  /**
   * Get Stock By Product id
   * @param {string} productId Product id
   * @return {Promise}
   */
  async findStockByProductId(productId) {
    return await this.#stockModel.findOne({
      where: { productId }
    });
  }
}

export default ProductService;
