import { DataTypes, Model } from "sequelize";
import sequelize from "./DatabaseConnection.js";

class StockModel extends Model {}

StockModel.init(
  {
    id: {
      type: DataTypes.STRING(22),
      primaryKey: true
    },
    qte: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "stocks",
    timestamps: true,
    createdAt: false
  }
);

export default StockModel;
