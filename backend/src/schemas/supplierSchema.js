const supplierBodyJsonSchema = {
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string"
    },
    address: {
      type: "string"
    },
    description: {
      type: "string"
    }
  }
};
const supplierSchema = {
  body: supplierBodyJsonSchema
};

export { supplierSchema };
