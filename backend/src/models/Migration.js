import ProductModel from "./ProductModel.js";
import SupplierModel from "./SupplierModel.js";
import TypeModel from "./TypeModel.js";
import CategoryModel from "./CategoryModel.js";
import UserModel from "./UserModel.js";
// import sequelize from "./DatabaseConnection.js";

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

// Migration de la base de donnée
// await sequelize.drop();
// sequelize
// .sync({ force: true })
// .then(() => {
// console.log("Les modèles ont été synchronisés avec succès.");
// })
// .catch((err) => {
// console.error("Erreur lors de la synchronisation des modèles :", err);
// });
