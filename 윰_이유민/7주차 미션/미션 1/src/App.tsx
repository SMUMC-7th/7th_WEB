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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
