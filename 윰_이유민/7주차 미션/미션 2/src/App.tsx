import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  RootLayout,
  NotFound,
  HomePage,
  Search,
  MovieCategory,
  CategoryMovieList,
  Login,
  Signup,
  MovieDetail,
} from './pages/index';
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
        path: '/search',
        element: <Search />,
      },
      {
        path: '/movies',
        element: <MovieCategory />,
      },
      {
        path: '/movies/category/:category',
        element: <CategoryMovieList />,
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
