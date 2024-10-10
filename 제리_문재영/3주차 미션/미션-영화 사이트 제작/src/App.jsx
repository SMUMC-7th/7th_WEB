
import RootLayout from './root-layout/root-layout'
import NotFound from './pages/notFound/NotFound'
import HomePage from './pages/homePage/HomePage'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/signup/SignUp'
import Search from './pages/search/Search'
import Movies from './pages/movies/Movies'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'


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
        element: <Movies/>
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
