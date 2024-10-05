import "./App.css";
import MoviesPage from "./pages/movies";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import SearchPage from "./pages/search";
import CategoryPage from "./pages/category";
import NotFound from "./pages/not-found";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import NowPlaying from "./pages/now-playing";
import Popular from "./pages/popular";
import TopRated from "./pages/top-rated";
import UpComing from "./pages/up-coming";

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
      {
        path: "/movies/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/movies/popular",
        element: <Popular />,
      },
      {
        path: "/movies/top-rated",
        element: <TopRated />,
      },
      {
        path: "/movies/up-coming",
        element: <UpComing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
