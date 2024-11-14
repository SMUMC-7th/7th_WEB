import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import router from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
