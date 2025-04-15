export const SignupForm = {
  email: {
    name: "email",
    type: "email",
    label: "Email",
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
  },
  password: {
    name: "password",
    type: "password",
    label: "Mot de passe",
    rules: {
      required: "Veuillez entrer votre mot de passe",
      minLength: {
        value: 3,
        message: "Ce champ doit comporter au moins 3 caractères"
      }
    }
  },
  confirmPassword: {
    name: "password",
    type: "password",
    label: "Confirmation mot de passe",
    rules: {
      required: "Veuillez entrer votre mot de passe",
      minLength: {
        value: 3,
        message: "Ce champ doit comporter au moins 3 caractères"
      }
    }
  }
};
