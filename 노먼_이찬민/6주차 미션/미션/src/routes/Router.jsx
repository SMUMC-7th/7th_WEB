import AppLayout from "../layout/AppLayout";
import {
  LoginPage,
  MainPage,
  SignupPage,
  SearchPage,
  CategoryPage,
  NowPlayingPage,
  PopularPage,
  TopRatedPage,
  UpCommingPage,
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
        path: "/movies/now-playing",
        element: <NowPlayingPage />,
      },
      {
        path: "/movies/popular",
        element: <PopularPage />,
      },
      {
        path: "/movies/top-rated",
        element: <TopRatedPage />,
      },
      {
        path: "/movies/up-coming",
        element: <UpCommingPage />,
      },
      {
        path: "/movies/:movieId",
        element: <MovieDetailPage />,
      },
    ],
  },
];

export default Router;
