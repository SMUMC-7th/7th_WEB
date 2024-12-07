import HomePage from "./page/home";
import SignUpPage from "./page/signup";
import LoginPage from "./page/login";
import NotFound from "./page/not-found";
import AdminPage from "./page/admin";
import WritingPage from "./page/writing";
import MyPage from "./page/mypage";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/root-layout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider, useAuthContext } from "./context/AuthContext";
import { AdminProvider, useAdminContext } from "./context/AdminContext";
import { PropsWithChildren } from "react";
import MyPostList from "./component/MyPostList";
import DetailedPage from "./page/detailed";
import UpdatePage from "./page/update";

const AdminRoute = ({ children }: PropsWithChildren) => {
  const { isRole } = useAdminContext();
  if (isRole == "user") {
    alert("권한이 없습니다.");
    return <Navigate to="/" replace />;
  }
  return children;
};

const UserRoute = ({ children }: PropsWithChildren) => {
  const { userName } = useAuthContext();
  if (!userName) {
    alert("로그인을 해주세요.");
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminPage />
          </AdminRoute>
        ),
      },
      {
        path: "me",
        element: (
          <UserRoute>
            <MyPage />
          </UserRoute>
        ),
      },
      {
        path: "mypost",
        element: (
          <UserRoute>
            <MyPostList />
          </UserRoute>
        ),
      },
      {
        path: "write",
        element: (
          <UserRoute>
            <WritingPage />
          </UserRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <UserRoute>
            <UpdatePage />
          </UserRoute>
        ),
      },
      {
        path: "detail/:id",
        element: <DetailedPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AdminProvider>
          <RouterProvider router={router} />
        </AdminProvider>
      </AuthProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
