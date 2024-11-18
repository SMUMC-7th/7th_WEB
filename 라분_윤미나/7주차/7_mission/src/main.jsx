import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <LoginContextProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </LoginContextProvider>
  </QueryClientProvider>
);
