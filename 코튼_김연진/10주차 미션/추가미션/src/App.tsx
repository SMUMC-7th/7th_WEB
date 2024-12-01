import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/route/route';
import { AuthProvider } from './context/LogInContext';
import { CookiesProvider } from 'react-cookie';
function App() {
    return (
        <CookiesProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </CookiesProvider>
    );
}

export default App;
