import { createBrowserRouter } from 'react-router-dom';
import {
  Category,
  CategoryMovieList,
  Home,
  Login,
  MovieDetails,
  PageNotFound,
  RootLayout,
  SearchMovies,
  Signup,
  MovieCreditList,
} from '../pages/index';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageNotFound />,
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
        path: '/category',
        element: <Category />,
      },
      {
        path: '/category/:category',
        element: <CategoryMovieList />,
      },
      {
        path: '/movies',
        element: <SearchMovies />,
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails />,
      },
      {
        path: '/movies/:movieId/credits',
        element: <MovieCreditList />,
      },
    ],
  },
]);

export default Router;
