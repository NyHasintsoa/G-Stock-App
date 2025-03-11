import { createRoot } from "react-dom/client";
import "./assets/index.css";
import App from "./App.jsx";
import "preline/preline";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
