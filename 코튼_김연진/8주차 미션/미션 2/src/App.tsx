import './App.css';
import { TodoListProvider } from './context/todoListContext';
import router from './routes/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
    return (
        <TodoListProvider>
            <RouterProvider router={router} />
        </TodoListProvider>
    );
}

export default App;
