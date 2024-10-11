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
        path: '/movies/:category',
        element: <MovieList />,
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
