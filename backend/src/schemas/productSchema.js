const productBodyJsonSchema = {
  type: "object",
  required: ["designation", "price", "category_id", "unite_id"],
  properties: {
    designation: {
      type: "string"
    },
    price: {
      type: "number"
    },
    category_id: {
      type: "string"
    },
    unite_id: {
      type: "string"
    },
    path_img: {
      type: "string"
    }
  }
};

const productSchema = {
  body: productBodyJsonSchema
};

export default productSchema;
