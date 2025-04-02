import { DataTypes, Model } from "sequelize";
import sequelize from "./DatabaseConnection.js";

class ProductModel extends Model {}

ProductModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    path_img: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: "products",
    timestamps: true,
    underscored: true
  }
);

export default ProductModel;
