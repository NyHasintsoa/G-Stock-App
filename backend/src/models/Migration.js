import ProductModel from "./ProductModel.js";
import SupplierModel from "./SupplierModel.js";
import TypeModel from "./TypeModel.js";
import CategoryModel from "./CategoryModel.js";
import UserModel from "./UserModel.js";
import OrderModel from "./OrderModel.js";
import OrderProductsModel from "./OrderProductsModel.js";

ProductModel.belongsToMany(CategoryModel, {
  through: "products_categories",
  timestamps: false
});

CategoryModel.belongsToMany(ProductModel, {
  through: "products_categories",
  timestamps: false
});

ProductModel.belongsTo(SupplierModel, {
  foreignKey: "supplierId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT"
});

SupplierModel.hasMany(ProductModel);

ProductModel.belongsTo(TypeModel, {
  foreignKey: "typesProductId",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT"
});

TypeModel.hasMany(ProductModel);

OrderModel.belongsTo(UserModel, {
  foreignKey: "userId",
  onDelete: "RESTRICT",
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
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT"
});

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
