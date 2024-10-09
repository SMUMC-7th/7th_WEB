// import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import HomePage from "./pages/home/home.jsx"
import RootLayout from "./layout/root-layout.jsx";
import NotFound from "./pages/not-found/not-found.jsx";
import UserInfo from "./pages/userInfo/userInfo.jsx";
import Artist from "./pages/artist/artist.jsx"
import ArtistInfo from "./pages/artistInfo/artistInfo.jsx"
import Album from "./pages/album/album.jsx";
import Test from "./pages/test/test.jsx"
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
          path: 'userInfo',
          element: <UserInfo/>
        },
        {
          path: 'artist',
          element: <Artist/>
        },
        {
          path: 'artist/:id',
          element: <ArtistInfo/>
        },
        {
          path: 'album',
          element: <Album/>
        },
        {
          path: 'test',
          element: <Test/>
        },
      ]
  }
])


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
