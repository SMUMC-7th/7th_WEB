import AppLayout from "../layout/AppLayout";
import MainPage from "../pages/MainPage";
import ContentPage from "../pages/ContentPage";

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
        index: "/content/:id",
        element: <ContentPage />,
      },
    ],
  },
];

export default Router;
