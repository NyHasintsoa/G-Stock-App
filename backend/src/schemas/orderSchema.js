const orderBodyJsonSchema = {
  type: "object",
  required: ["carts"],
  properties: {
    carts: {
      type: "array"
    }
  }
};
const orderSchema = {
  body: orderBodyJsonSchema
};

export { orderSchema };
