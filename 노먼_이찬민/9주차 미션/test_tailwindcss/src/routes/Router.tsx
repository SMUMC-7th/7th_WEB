import { Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import {
  LoginPage,
  MainPage,
  SignupPage,
  SearchPage,
  CategoryPage,
  MovieDetailPage,
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
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetailPage />,
      },
    ],
  },
];

export default Router;
