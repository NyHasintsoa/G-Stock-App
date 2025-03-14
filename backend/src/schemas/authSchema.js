const authBodyJsonSchema = {
  type: "object",
  required: ["email", "password"],
  properties: {
    name: {
      type: "string"
    },
    password: {
      type: "string"
    }
  }
};

const authSchema = {
  body: authBodyJsonSchema
};

export { authSchema };
