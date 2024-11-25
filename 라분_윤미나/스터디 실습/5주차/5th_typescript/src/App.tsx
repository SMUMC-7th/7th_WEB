import "./App.css";
//import MoviesPage from "./page/Movies/movies";
import TrendingPage from "./page/Trending/Trending";
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

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./layout/root-layout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAuthContext, AuthProvider } from "./context/AuthContext";
import { PropsWithChildren } from "react";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { userName } = useAuthContext();
  if (userName == null) {
    alert("로그인을 해주세요.");
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <TrendingPage />,
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
        element: (
          <ProtectedRoute>
            <NowPlaying />
          </ProtectedRoute>
        ),
      },
      {
        path: "movies/popular",
        element: (
          <ProtectedRoute>
            <Popular />,
          </ProtectedRoute>
        ),
      },
      {
        path: "movies/top-rated",
        element: (
          <ProtectedRoute>
            <TopRated />
          </ProtectedRoute>
        ),
      },
      {
        path: "movies/up-coming",
        element: (
          <ProtectedRoute>
            <UpComing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movies/:movieId",
        element: <DetailedPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </AuthProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
