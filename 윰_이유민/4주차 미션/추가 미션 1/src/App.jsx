import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from "./pages/not-found";
import RootLayout from './layout/root-layout';
import HomePage from './pages/home/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
