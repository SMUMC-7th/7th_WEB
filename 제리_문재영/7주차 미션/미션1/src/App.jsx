
import RootLayout from './root-layout/root-layout'
import NotFound from './pages/notFound/NotFound'
import HomePage from './pages/homePage/HomePage'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/signup/SignUp'
import Search from './pages/search/Search'
import Movies from './pages/movies/Movies'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import NowPlaying from './pages/categorys/nowplaying'
import Popular from './pages/categorys/popular'
import TopRated from './pages/categorys/toprated'
import UpComing from './pages/categorys/upcoming'
import MoviesDetails from './pages/moviesDetails/MoviesDetails'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from './../node_modules/@tanstack/react-query-devtools/src/production';

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
      },
      {
        path: '/movies/:movieId',
        element: <MoviesDetails/>
      }
    ]
  }
])

const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
