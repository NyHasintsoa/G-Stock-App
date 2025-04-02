import OrderModel from "../models/OrderModel.js";
import OrderProductsModel from "../models/OrderProductsModel.js";
import ProductModel from "../models/ProductModel.js";
import SupplierModel from "../models/SupplierModel.js";
import TypeModel from "../models/TypeModel.js";
import UserModel from "../models/UserModel.js";
import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";

class OrderService extends ParentService {
  _model;

  #orderProductsModel;

  /** @type {import("sequelize").FindOptions} */
  _findOptions = {
    attributes: {
      exclude: ["userId"]
    },
    include: [
      {
        model: UserModel,
        attributes: {
          exclude: ["password", "roles", "provider"]
        }
      },
      {
        model: OrderProductsModel,
        include: [
          {
            model: ProductModel,
            attributes: {
              exclude: ["supplierId", "typesProductId"]
            },
            include: [{ model: SupplierModel }, { model: TypeModel }]
          }
        ]
      }
    ]
  };

  constructor() {
    super();
    this._model = OrderModel;
    this.#orderProductsModel = OrderProductsModel;
  }

  /**
   * Create a new Order with User and All Products
   * @param {import("fastify").FastifyRequest} req Request from client
   */
  async addOrder(req) {
    const user = req.user;
    const { carts } = req.body;
    const order = await this._model.create({
      id: generateId(new Date().getTime() + "-order"),
      userId: user.id
    });
    const listCarts = [];
    for await (const cart of carts) {
      const cartItem = await this.#orderProductsModel.create({
        orderId: order.id,
        productId: cart.id,
        qte: cart.qte,
        price: cart.price
      });
      listCarts.push(cartItem);
    }
    return {
      order,
      listCarts
    };
  }
}

export default OrderService;
