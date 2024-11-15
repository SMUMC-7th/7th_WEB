import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { AuthProvider } from './context/AuthContext';
import { TodoListProvider } from './context/TodoContext';

function App() {
  return (
    <TodoListProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </TodoListProvider>
  );
}

export default App;
