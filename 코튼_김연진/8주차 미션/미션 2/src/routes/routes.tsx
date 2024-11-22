import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import TodoDetail from '../pages/TodoDetail/TodoDetail';
import Search from '../pages/search/search';
import NotFound from '../pages/not-found/not-found';
const router = createBrowserRouter([
    {
        element: <Layout></Layout>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/todo/:id',
                element: <TodoDetail></TodoDetail>,
            },
            {
                path: '/search',
                element: <Search></Search>,
            },
        ],
    },
]);

export default router;
