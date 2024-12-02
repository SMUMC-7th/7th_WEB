import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/root-layout';
import HomePage from './pages/home/home';
import NotFound from './pages/not-found/notFound';
import Members from './pages/members/members';
import Projects from './pages/projects/projects';
import Notice from './pages/notice/notice';
import GlobalFont from './styles/GlobalFont';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from './context/ThemeContext';

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
                path: 'members',
                element: <Members />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'notice',
                element: <Notice />,
            },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider>
            <GlobalFont />
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
