import { Op, QueryTypes } from "sequelize";
import OrderModel from "../models/OrderModel.js";
import OrderProductsModel from "../models/OrderProductsModel.js";
import ProductModel from "../models/ProductModel.js";
import SupplierModel from "../models/SupplierModel.js";
import TypeModel from "../models/TypeModel.js";
import UserModel from "../models/UserModel.js";
import generateId from "../utils/generateId.js";
import ParentService from "./ParentService.js";
import sequelize from "../models/DatabaseConnection.js";

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

  async getAnnualIncomes() {
    let incomes = 0;
    const year = new Date().getFullYear();
    const results = await OrderModel.findAll({
      include: [
        {
          model: OrderProductsModel
        }
      ],
      where: {
        created_at: {
          [Op.between]: [
            new Date(`${year}-01-01T00:00:00`),
            new Date(`${year}-12-31T23:00:00`)
          ]
        }
      }
    });
    results.forEach((result) => {
      result.OrderProducts.forEach((item) => {
        incomes += parseInt(item.qte) * item.price;
      });
    });
    return incomes;
  }

  async annualIncomes() {
    const year = new Date().getFullYear();
    const [{ annualIncomes }, metadata] = await sequelize.query(
      {
        query:
          "SELECT SUM(`OrderProducts`.`qte`*`OrderProducts`.`price`) AS `annualIncomes` " +
          "FROM `orders` AS `orders` LEFT OUTER JOIN `order_products` " +
          "AS `OrderProducts` ON `orders`.`id` = `OrderProducts`.`order_id` " +
          "WHERE `orders`.`created_at` BETWEEN ? AND ?;",
        values: [
          new Date(`${year}-01-01T12:00:00`),
          new Date(`${year}-12-31T24:00:00`)
        ]
      },
      {
        type: QueryTypes.SELECT
      }
    );
    return annualIncomes;
  }
}

export default OrderService;
