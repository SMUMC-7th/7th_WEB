
import RootLayout from './root-layout/root-layout'
import NotFound from './pages/notFound/NotFound'
import HomePage from './pages/homePage/HomePage'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/signup/SignUp'
import Search from './pages/search/Search'
import Movies from './pages/movies/Movies'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import NowPlaying from './pages/Categorys/nowplaying'
import Popular from './pages/Categorys/popular'
import TopRated from './pages/Categorys/toprated'
import UpComing from './pages/Categorys/upcoming'


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
        path: 'login',
        element: <LogIn/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: 'search',
        element: <Search/>
      },
      {
        path: 'movies',
        element: <Movies/>,
      },
      {
        path: 'movies/nowplaying',
        element: <NowPlaying/>
      },
      {
        path: 'movies/popular',
        element: <Popular/>
      },
      {
        path: 'movies/toprated',
        element: <TopRated/>
      },
      {
        path: 'movies/upcoming',
        element: <UpComing/>
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
