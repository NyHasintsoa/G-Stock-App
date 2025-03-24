import { DataTypes, Model } from "sequelize";
import sequelize from "./DatabaseConnection.js";

class TypeModel extends Model {}

TypeModel.init(
  {
    id: {
      type: DataTypes.STRING(22),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      unique: true,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: "types_product",
    timestamps: false
  }
);

export default TypeModel;
