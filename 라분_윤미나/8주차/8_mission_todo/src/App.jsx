import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import TodoPage from "./pages/todo/todo";
import NotFound from "./pages/Not-Found/not-found";
import DetailedPage from "./pages/detailed/detailed";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <TodoPage />,
      },
      {
        path: "/todo/:id",
        element: <DetailedPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
