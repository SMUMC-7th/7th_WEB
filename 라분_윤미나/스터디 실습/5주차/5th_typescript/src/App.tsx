import "./App.css";
import MoviesPage from "./page/Movies/movies";
import LoginPage from "./page/Login/login";
import SignUpPage from "./page/Signup/signup";
import SearchPage from "./page/Search/search";
import CategoryPage from "./page/Category/category";
import NotFound from "./page/Not-Found/not-found";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
