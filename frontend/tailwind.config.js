import rippleUi from "rippleui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {}
  },
  plugins: [rippleUi]
};
