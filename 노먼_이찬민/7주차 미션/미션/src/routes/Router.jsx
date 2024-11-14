import { Navigate } from "react-router-dom";
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
import { useAuthContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { username } = useAuthContext();

  if (username == null) {
    alert("로그인이 필요한 서비스입니다");
    return (
      <Navigate to="/login" replace={true}>
        {children}
      </Navigate>
    );
  } else {
    return children;
  }
};

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
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/category",
        element: (
          <ProtectedRoute>
            <CategoryPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "/movies/:category",
        element: (
          <ProtectedRoute>
            <MoviesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movies/detail/:movieId",
        element: (
          <ProtectedRoute>
            <MovieDetailPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default Router;
