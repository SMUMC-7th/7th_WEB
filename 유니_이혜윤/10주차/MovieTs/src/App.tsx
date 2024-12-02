import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import Login from "./pages/Login/Login.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Category from "./pages/Category/Category.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieHome from "./pages/MovieHome/MovieHome.tsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail.tsx";
import NowPlaying from "./pages/NowPlaying.tsx";
import Popular from "./pages/Popular.tsx";
import TopRated from "./pages/TopRated.tsx";
import Upcomiing from "./pages/Upcoming.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MovieHome />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/movie/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/movie/popular",
        element: <Popular />,
      },
      {
        path: "/movie/top-rated",
        element: <TopRated />,
      },
      {
        path: "/movie/up-coming",
        element: <Upcomiing />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
