import "./App.css";
import HomePage from "./pages/home";
import MoviesPage from "./pages/movies";
import NotFound from "./pages/not-found";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";

const router = createBrowserRouter([
  {
    path: "/",
    //element: <HomePage />,
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
    ],
  },
  {
    path: "/movies/:movieId",
    element: <MoviesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
