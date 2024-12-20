import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/root-layout.jsx';
import HomePage from './pages/home/home.jsx';
import NotFound from './pages/notFound/notFound.js';
import SignUp from './pages/signup/signup.jsx';
import LogIn from './pages/login/login.jsx';
import Search from './pages/search/search.jsx';
import Category from './pages/category/category.jsx';
import MoviesCategory from './pages/moviesCategory/moviesCategory.jsx';
import MoviesDetail from './pages/moviesDetail/moviesDetail.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
        ],
    },
]);
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />;
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
