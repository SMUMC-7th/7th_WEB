import AppLayout from "../layout/AppLayout";
import {
  LoginPage,
  MainPage,
  SignupPage,
  SearchPage,
  CategoryPage,
  MovieDetailPage,
  MoviesPage,
} from "../pages/index";

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },

      {
        path: "/movies/:category",
        element: <MoviesPage />,
      },
      {
        path: "/movies/detail/:movieId",
        element: <MovieDetailPage />,
      },
    ],
  },
];

export default Router;
