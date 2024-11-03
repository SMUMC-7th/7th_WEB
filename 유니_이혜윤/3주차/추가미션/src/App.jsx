import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoPage from "../pages/TodoPage";
import TodoDetail from "../pages/TodoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
  {
    path: "todo/:id",
    element: <TodoDetail />,
  },
]);

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "aliceblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
