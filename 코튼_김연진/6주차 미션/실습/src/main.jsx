import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './components/button.css';
import './components/input.css';
import { TodoContextProvider } from './context/TodoContext.jsx';

createRoot(document.getElementById('root')).render(
    <TodoContextProvider>
        <App />
    </TodoContextProvider>
);
