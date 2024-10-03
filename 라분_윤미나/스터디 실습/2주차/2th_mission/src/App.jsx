import React from 'react';
import HomePage from './pages/home';
import DetailedPage from './pages/detailed';
import NotFound from './pages/not-found';
import RosePage from './pages/rose';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/root-layout';
import './App.css';

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
        path: '/detailed/:id',
        element: <DetailedPage />,
      },
      {
        path: '/rose',
        element: <RosePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
