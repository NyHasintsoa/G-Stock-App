export const RecoveryAccount = {
  email: {
    name: "email",
    type: "email",
    label: "Adresse mail",
    rules: {
      required: "Veuillez entrer votre adresse mail",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Adresse e-mail invalide"
      },
      minLength: {
        value: 3,
        message: "Ce champ doit comporter au moins 3 caractères"
      }
    }
  }
};
