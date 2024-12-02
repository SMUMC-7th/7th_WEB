import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/root-layout';
import { WritePost, EditPost, Home, Login, PostDetails, Signup, SearchPosts } from '../pages/index';

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
        path: '/posts',
        element: <SearchPosts />,
      },
      {
        path: '/posts/:postId',
        element: <PostDetails />,
      },
      {
        path: '/posts/:postId/edit',
        element: <EditPost />,
      },
    ],
  },
]);

export default Router;
