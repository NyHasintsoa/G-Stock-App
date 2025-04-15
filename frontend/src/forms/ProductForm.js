export const ProductForm = {
  name: {
    name: "name",
    type: "text",
    label: "Désignation du produit",
    rules: {
      required: "Veuillez entrer le nom du produit",
      minLength: {
        value: 3,
        message: "Ce champ doit comporter au moins 3 caractères"
      }
    }
  },
  price: {
    name: "price",
    type: "number",
    label: "Prix Unitaire",
    rules: {
      required: "Veuillez entrer le prix du produit",
      minLength: {
        value: 1,
        message: "Ce champ doit comporter au moins 1 caractères"
      }
    }
  },
  description: {
    name: "description",
    type: "textarea",
    label: "Description"
  },
  productImage: {
    name: "product-image",
    type: "file",
    label: "Photo du produit"
  },
  supplier: {
    name: "supplierId",
    type: "select",
    label: "Fournisseur",
    rules: {
      required: "Veuillez choisir le fournisseur du produit"
    },
    selectOptions: {
      id: "id",
      value: "name"
    }
  },
  typesProduct: {
    name: "typesProductId",
    type: "select",
    label: "Type du produit",
    rules: {
      required: "Veuillez choisir le type du produit"
    },
    selectOptions: {
      id: "id",
      value: "name"
    }
  },
  categories: {
    name: "categoriesId",
    type: "select",
    label: "Catégories du produit",
    rules: {
      required: "Veuillez choisir les catégories du produit"
    },
    selectOptions: {
      id: "id",
      value: "name"
    }
  }
};
