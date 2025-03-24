const productBodyJsonSchema = {
  type: "object",
  required: ["name", "price", "supplierId", "typesProductId", "categoriesId"],
  properties: {
    name: {
      type: "string"
    },
    price: {
      type: "number"
    },
    supplierId: {
      type: "string"
    },
    typesProductId: {
      type: "string"
    },
    categoriesId: {
      type: "array"
    }
  }
};

const productSchema = {
  body: productBodyJsonSchema
};

export default productSchema;
