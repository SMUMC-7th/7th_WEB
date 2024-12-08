import './App.css';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/LogInContext.js';
import router from './routes/routes.js';

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
