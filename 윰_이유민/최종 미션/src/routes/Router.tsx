import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/root-layout';
import { WritePost, EditPost, Home, Login, PostDetails, Signup } from '../pages';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/write',
        element: <WritePost />,
      },
      {
        path: '/post/:postId',
        element: <PostDetails />,
      },
      {
        path: '/post/:postId/edit',
        element: <EditPost />,
      },
    ],
  },
]);

export default Router;
