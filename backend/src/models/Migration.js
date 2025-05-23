import ProductModel from "./ProductModel.js";
import SupplierModel from "./SupplierModel.js";
import TypeModel from "./TypeModel.js";
import CategoryModel from "./CategoryModel.js";
import UserModel from "./UserModel.js";
import OrderModel from "./OrderModel.js";
import OrderProductsModel from "./OrderProductsModel.js";
import StockModel from "./StockModel.js";

ProductModel.belongsToMany(CategoryModel, {
  through: "products_categories",
  timestamps: false,
  onDelete: "CASCADE",
  onUpdate: "RESTRICT"
});

CategoryModel.belongsToMany(ProductModel, {
  through: "products_categories",
  timestamps: false,
  onDelete: "CASCADE",
  onUpdate: "RESTRICT"
});

ProductModel.belongsTo(SupplierModel, {
  foreignKey: "supplierId",
  onDelete: "CASCADE",
  onUpdate: "RESTRICT"
});

SupplierModel.hasMany(ProductModel);

ProductModel.belongsTo(TypeModel, {
  foreignKey: "typesProductId",
  onDelete: "CASCADE",
  onUpdate: "RESTRICT"
});

TypeModel.hasMany(ProductModel);

OrderModel.belongsTo(UserModel, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "RESTRICT"
});

UserModel.hasMany(OrderModel, {
  foreignKey: "userId"
});

OrderModel.belongsToMany(ProductModel, {
  through: OrderProductsModel
});

ProductModel.belongsToMany(OrderModel, {
  through: OrderProductsModel
});

OrderModel.hasMany(OrderProductsModel);

ProductModel.hasMany(OrderProductsModel);

OrderProductsModel.belongsTo(ProductModel, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "NONE"
});

StockModel.belongsTo(ProductModel, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "RESTRICT"
});

ProductModel.hasOne(StockModel);
//
// import sequelize from "./DatabaseConnection.js";
// await sequelize.drop();
// sequelize
// .sync({ force: true })
// .then(() => {
// console.log("Les modèles ont été synchronisés avec succès.");
// })
// .catch((err) => {
// console.error("Erreur lors de la synchronisation des modèles :", err);
// });
