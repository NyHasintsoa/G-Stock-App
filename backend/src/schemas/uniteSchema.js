const uniteBodyJsonSchema = {
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string"
    }
  }
};

const uniteSchema = {
  body: uniteBodyJsonSchema
};

export { uniteSchema };
