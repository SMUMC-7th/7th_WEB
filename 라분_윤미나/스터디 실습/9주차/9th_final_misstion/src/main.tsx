import { AuthProvider } from "./context/AuthContext.tsx";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </CookiesProvider>
);
