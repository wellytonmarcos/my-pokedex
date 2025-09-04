import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { PokedexProvider } from "./context/PokedexContext";

createRoot(document.getElementById("root")).render(
  <PokedexProvider>
    <App />
  </PokedexProvider>
);
