import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(<App />);
