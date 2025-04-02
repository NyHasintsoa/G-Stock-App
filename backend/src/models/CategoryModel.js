import { DataTypes, Model } from "sequelize";
import sequelize from "./DatabaseConnection.js";

class CategoryModel extends Model {}

CategoryModel.init(
  {
    id: {
      type: DataTypes.STRING(20),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "categories",
    timestamps: false,
    underscored: true
  }
);

export default CategoryModel;
