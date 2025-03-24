import ProductModel from "./ProductModel.js";
import SupplierModel from "./SupplierModel.js";
import TypeModel from "./TypeModel.js";
import CategoryModel from "./CategoryModel.js";
// import sequelize from "./DatabaseConnection.js";

ProductModel.belongsToMany(CategoryModel, {
  through: "products_categories",
  timestamps: false
});
ProductModel.belongsTo(SupplierModel, {
  foreignKey: "supplierId"
});
ProductModel.belongsTo(TypeModel, {
  foreignKey: "typesProductId"
});

// Migration de la base de donnée
// sequelize.drop()
// sequelize
// .sync({ force: true })
// .then(() => {
// console.log("Les modèles ont été synchronisés avec succès.");
// })
// .catch((err) => {
// console.error("Erreur lors de la synchronisation des modèles :", err);
// });
