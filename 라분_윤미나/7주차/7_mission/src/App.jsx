import "./App.css";
import MoviesPage from "./pages/Movies/movies";
import LoginPage from "./pages/Login/login";
import SignUpPage from "./pages/Signup/signup";
import SearchPage from "./pages/Search/search";
import CategoryPage from "./pages/Category/category";
import NotFound from "./pages/Not-Found/not-found";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import NowPlaying from "./pages/Now-Playing/now-playing";
import Popular from "./pages/Popular/popular";
import TopRated from "./pages/Top-Rated/top-rated";
import UpComing from "./pages/Up-Coming/up-coming";
import DetailedPage from "./pages/Detailed/DetailedPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <RouterProvider router={router} future={{ v7_startTransition: true }} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
