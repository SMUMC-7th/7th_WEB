import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import TodoList from "../components/TodoList";
import LoginPage from "../pages/login/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage";
import { PropsWithChildren } from "react";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { username } = useAuthContext();

  if (username == null) {
    alert("로그인이 필요한 서비스입니다");
    return <Navigate to="/login" replace={true}></Navigate>;
  }
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <TodoList />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
