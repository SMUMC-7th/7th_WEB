import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/home/Home.jsx";
import NotFound from "./pages/not-found.jsx";
import MovieList from "./pages/movieList/MovieList.jsx";
import RootLayout from "./layout/root-layout.jsx";
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Search from './pages/search/Search.jsx';
import MovieCategory from './pages/movieCategory/MovieCategory.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/movies',
                element: <MovieCategory/>
            },
            {
                path: '/movies/now-playing',
                element: <MovieList category="now_playing" />
            },
            {
                path: '/movies/popular',
                element: <MovieList category="popular" />
            },
            {
                path: '/movies/top-rated',
                element: <MovieList category="top_rated" />
            },
            {
                path: '/movies/up-coming',
                element: <MovieList category="upcoming" />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },

])

function App() {
    return <RouterProvider router={router}/>
}

export default App
