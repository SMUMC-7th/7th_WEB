import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout';
import NotFound from '../page/notFound/notFound';
import Home from '../page/home/home';
import Login from '../page/Login/login';
import Signup from '../page/signup/signup';
import Write from '../page/write/write';
import PostDetail from '../page/postDetail/postDetail';
import EditPost from '../page/editPost/editPost';
import Admin from '../page/admin/admin';
import { useAuthContext } from '../context/LogInContext';
import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import MyPage from '../page/myPage/myPage';
import Search from '../page/search/search';
// eslint-disable-next-line react-refresh/only-export-components
const ProtectedAdminRoute = ({ children }: PropsWithChildren) => {
    const { role, isLogin } = useAuthContext();

    if (role == 'user' || !isLogin) {
        alert('일반 사용자는 접근할 수 없습니다');
        return <Navigate to="/" replace />;
    }

    return children;
};
// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoute = ({ children }: PropsWithChildren) => {
    const { isLogin } = useAuthContext();

    if (!isLogin) {
        alert('로그인한 사용자만 접근할 수 없습니다');
        return <Navigate to="/login" replace />;
    }

    return children;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/write',
                element: (
                    <ProtectedRoute>
                        <Write />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/post/:id',
                element: <PostDetail />,
            },
            {
                path: '/edit/:id',
                element: <EditPost />,
            },
            {
                path: '/search',
                element: <Search />,
            },
            {
                path: '/mypage',
                element: (
                    <ProtectedRoute>
                        <MyPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/admin',
                element: (
                    <ProtectedAdminRoute>
                        <Admin />
                    </ProtectedAdminRoute>
                ),
            },
        ],
    },
]);
export default router;
