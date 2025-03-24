import { DataTypes, Model } from "sequelize";
import sequelize from "./DatabaseConnection.js";

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.STRING(22),
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(200),
      unique: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    profile_image: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    roles: {
      type: DataTypes.ENUM("ROLE_ADMIN", "ROLE_USER", "ROLE_CLIENT")
    }
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true
  }
);

export default UserModel;
