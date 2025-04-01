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

const accountRecoveryBodyJsonSchema = {
  type: "object",
  required: ["email"],
  properties: {
    name: {
      type: "string"
    }
  }
};
const accountRecoverySchema = {
  body: accountRecoveryBodyJsonSchema
};

export { authSchema, accountRecoverySchema };
