import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import TodoList from '../components/TodoList';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import { useAuthContext } from '../context/AuthContext';
import { PropsWithChildren } from 'react';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { username } = useAuthContext();

  if (username == null) {
    alert('로그인이 필요한 서비스입니다. 로그인을 해주세요!');
    return <Navigate to="/login" replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <TodoList />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
