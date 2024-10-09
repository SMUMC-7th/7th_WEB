import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import NotFound from "./pages/not-found/not-found";
import userPage from "./pages/user/userPage";
import MainPage from "./pages/main/mainPage";
import artistListPage from "./pages/artistList/artistList";
import albumPage from "./pages/album/album";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          index: "user",
          element: <userPage />,
        },
        {
          index: "artistList",
          element: <artistListPage />,
        },
        {
          index: "album",
          element: <albumPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
