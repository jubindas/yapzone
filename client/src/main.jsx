import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Assuming you have a global CSS file for Tailwind

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
