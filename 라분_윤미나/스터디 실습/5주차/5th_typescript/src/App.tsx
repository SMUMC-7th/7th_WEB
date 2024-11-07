import "./App.css";
import MoviesPage from "./page/Movies/movies";
import LoginPage from "./page/Login/login";
import SignUpPage from "./page/Signup/signup";
import SearchPage from "./page/Search/search";
import CategoryPage from "./page/Category/category";
import NotFound from "./page/Not-Found/not-found";
import NowPlaying from "./page/Now-Playing/now-playing";
import Popular from "./page/Popular/popular";
import TopRated from "./page/Top-Rated/top-rated";
import UpComing from "./page/Up-Coming/up-coming";
import DetailedPage from "./page/Detailed/DetailedPage";

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
      {
        path: "movies/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "movies/popular",
        element: <Popular />,
      },
      {
        path: "movies/top-rated",
        element: <TopRated />,
      },
      {
        path: "movies/up-coming",
        element: <UpComing />,
      },
      {
        path: "/movies/:movieId",
        element: <DetailedPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
