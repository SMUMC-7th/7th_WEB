import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/root-layout';
import { Login, Signup } from '../pages';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default Router;
