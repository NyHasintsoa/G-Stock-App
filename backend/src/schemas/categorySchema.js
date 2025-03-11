const categoryBodyJsonSchema = {
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string"
    }
  }
};

const categorySchema = {
  body: categoryBodyJsonSchema
};

export { categorySchema };
