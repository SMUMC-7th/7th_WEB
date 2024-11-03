import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TodoList } from './pages/todoList/TodoList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
