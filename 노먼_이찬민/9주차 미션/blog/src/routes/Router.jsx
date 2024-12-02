import { Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import { LoginPage, SignUpPage, MainPage } from "../pages/index";

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
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];

export default Router;
