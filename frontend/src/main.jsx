import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import App from "./App.jsx";
import "preline/preline";
import { ThemeContextProvider } from "./hooks/useTheme.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </React.StrictMode>
  </>
);
