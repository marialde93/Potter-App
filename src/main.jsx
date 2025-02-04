// Importa el CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Importa los íconos de Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
// Importa el JS de Bootstrap (opcional, solo si usas componentes que requieren JS)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
