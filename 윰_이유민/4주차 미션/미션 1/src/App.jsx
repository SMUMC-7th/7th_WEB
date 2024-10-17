import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  RootLayout,
  NotFound,
  HomePage,
  Search,
  MovieCategory,
  MovieList,
  Login,
  Signup,
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
        path: '/movies/now-playing',
        element: <MovieList category="now_playing" />,
      },
      {
        path: '/movies/popular',
        element: <MovieList category="popular" />,
      },
      {
        path: '/movies/top-rated',
        element: <MovieList category="top_rated" />,
      },
      {
        path: '/movies/up-coming',
        element: <MovieList category="upcoming" />,
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
