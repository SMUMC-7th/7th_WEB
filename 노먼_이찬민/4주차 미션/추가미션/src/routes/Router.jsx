import AppLayout from "../layout/AppLayout";
import ArtistPage from "../pages/artist/ArtistPage";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import UserPage from "../pages/user/UserPage";
import ArtistDetailPage from "./../pages/artistDetail/ArtistDetailPage";

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
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/artist",
        element: <ArtistPage />,
      },
      {
        path: "/artist/:artistId",
        element: <ArtistDetailPage />,
      },
    ],
  },
];

export default Router;
