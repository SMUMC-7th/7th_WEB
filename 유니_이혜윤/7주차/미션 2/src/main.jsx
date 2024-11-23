import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { IsLoginProvider } from "./context/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <IsLoginProvider>
    <App />
  </IsLoginProvider>
);
