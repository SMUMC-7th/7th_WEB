import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import NotFound from "./pages/not-found/not-found";
import UserPage from "./pages/user/userPage";
import MainPage from "./pages/main/mainPage";
import ArtistListPage from "./pages/artistList/artistList";
import AlbumPage from "./pages/album/album";

import OasisPage from "./pages/artists/OasisPage";
import BYRPage from "./pages/artists/BYRPage";

import TestPage from "./pages/test/test";

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
          path: "user",
          element: <UserPage />,
        },
        {
          path: "artistList",
          element: <ArtistListPage />,
        },
        {
          path: "album",
          element: <AlbumPage />,
        },
        {
          path: "artists/2DaxqgrOhkeH0fpeiQq2f4",
          element: <OasisPage />,
        },
        {
          path: "artists/6dhfy4ByARPJdPtMyrUYJK",
          element: <BYRPage />,
        },
        {
          path: "test",
          element: <TestPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
