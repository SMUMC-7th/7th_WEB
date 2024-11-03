// import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import HomePage from "./pages/home/home.jsx"
import TodoDetail from "./pages/todoDetail/todoDetail.jsx"
import RootLayout from "./layout/root-layout.jsx";
import NotFound from "./pages/notfound/notfound.jsx";
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
          path: 'todo/:id',
          element: <TodoDetail/>
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
