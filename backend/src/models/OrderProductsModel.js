import { DataTypes, Model } from "sequelize";
import OrderModel from "./OrderModel.js";
import ProductModel from "./ProductModel.js";
import sequelize from "./DatabaseConnection.js";

class OrderProductsModel extends Model {}

OrderProductsModel.init(
  {
    orderId: {
      type: DataTypes.STRING(22),
      references: {
        model: OrderModel,
        key: "id"
      }
    },
    productId: {
      type: DataTypes.STRING(22),
      references: {
        model: ProductModel,
        key: "id"
      }
    },
    qte: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "OrderProducts",
    timestamps: false,
    underscored: true
  }
);

export default OrderProductsModel;
