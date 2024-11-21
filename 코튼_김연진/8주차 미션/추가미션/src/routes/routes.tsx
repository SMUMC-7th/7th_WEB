import { useAuthContext } from '../context/LogInContext.tsx';
import { PropsWithChildren } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/root-layout.jsx';
import HomePage from '../pages/home/home.jsx';
import NotFound from '../pages/notFound/notFound.js';
import SignUp from '../pages/signup/signup.jsx';
import LogIn from '../pages/login/login.jsx';
import Search from '../pages/search/search.jsx';
import Category from '../pages/category/category.jsx';
import MoviesCategory from '../pages/moviesCategory/moviesCategory.jsx';
import MoviesDetail from '../pages/moviesDetail/moviesDetail.jsx';
import { Navigate } from 'react-router-dom';
import ProtectedPage from '../pages/protectedPage/protectedPage.tsx';
import MovieCreditDetail from '../pages/movieCreditDetail/movieCreditDetail';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
    const { isLogin } = useAuthContext();

    if (isLogin == false) {
        alert('로그인이 필요한 서비스입니다. 로그인을 해주세요!');
        return <Navigate to="/login" replace />;
    }

    return children;
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'login',
                element: <LogIn />,
            },
            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'category',
                element: <Category />,
            },
            {
                path: 'movies/:movieId',
                element: <MoviesDetail />,
            },
            {
                path: 'category/:category',
                element: <MoviesCategory />,
            },
            {
                path: 'credit/:movieID',
                element: <MovieCreditDetail />,
            },
            {
                path: 'protected',
                element: (
                    <ProtectedRoute>
                        <ProtectedPage></ProtectedPage>
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
export default router;
