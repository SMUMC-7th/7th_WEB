import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import LoginPage from "../pages/Login";
import ProfilePage from "../pages/Profile";
import { PropsWithChildren } from "react";
import { useAuthContext } from "../context/AuthContext";
import TodoList from "../component/TodoList";

const ProtectedRoute = ({ Children }: PropsWithChildren) => {
  const { username } = useAuthContext();
  if (username == null) {
    alert("로그인을 해주세요.");
    return <Navigate to="/login" replace />;
  }
};

const router = createBrowserRouter([
  {
    element: <Layout />,
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
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
