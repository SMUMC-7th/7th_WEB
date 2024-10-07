import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/root-layout";
import Movies from "./components/Movies";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SearchPage from "./pages/SearchPage";
import Category from "./pages/MovieCategory";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";

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
        element: <Category />,
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
