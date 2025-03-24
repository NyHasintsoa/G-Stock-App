import { DataTypes, Model } from "sequelize";
import sequelize from "./DatabaseConnection.js";

class SupplierModel extends Model {}

SupplierModel.init(
  {
    id: {
      type: DataTypes.STRING(22),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      unique: true
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: "suppliers",
    timestamps: true
  }
);

export default SupplierModel;
