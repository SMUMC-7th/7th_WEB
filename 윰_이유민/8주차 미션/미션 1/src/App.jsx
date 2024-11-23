import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './pages/todoList/TodoList';
import TodoDetails from './pages/todoDetail/TodoDetails';
import { RootLayout } from './layout/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TodoList />,
      },
      {
        path: '/todo/:todoId',
        element: <TodoDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
