import { Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import MainPage from "../pages/main/MainPage";
import TodoDetailPage from "../pages/todoDetail/TodoDetailPage";

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
        path: "/todo/:id",
        element: <TodoDetailPage />,
      },
    ],
  },
];

export default Router;
