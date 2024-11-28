import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TodoContextProvider } from "./context/todoContext.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <TodoContextProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </TodoContextProvider>
  </QueryClientProvider>
);
