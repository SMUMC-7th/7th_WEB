import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/root-layout";
import Movies from "./components/Movies";
import {
  Login,
  Signup,
  SearchPage,
  MovieCategory,
  NowPlaying,
  Popular,
  TopRated,
  UpComing,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "category",
        element: <MovieCategory />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
