import { DataTypes, Model } from "sequelize";
import sequelize from "./DatabaseConnection.js";

class OrderModel extends Model {}

OrderModel.init(
  {
    id: {
      type: DataTypes.STRING(22),
      primaryKey: true
    }
  },
  {
    sequelize,
    modelName: "orders",
    timestamps: true,
    updatedAt: false,
    underscored: true
  }
);

export default OrderModel;
