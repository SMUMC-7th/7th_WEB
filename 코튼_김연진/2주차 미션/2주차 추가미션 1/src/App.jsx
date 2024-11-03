import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-layout.jsx";
import Home from "./pages/Home/home.jsx"
import NotFound from "./pages/NotFound/notfound.jsx"
import Content from "./pages/Content/content.jsx"
import UMC from "./pages/UMC/umc.jsx"
import Baekjoon from "./pages/Baekjoon/baekjoon.jsx"


const router = createBrowserRouter([
  {
      path: '/',
      element: <RootLayout/>,
      errorElement: <NotFound/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'content/:id',
          element: <Content/>
        },
        {
          path: 'umc',
          element: <UMC/>
        },
        {
          path: 'baekjoon',
          element: <Baekjoon/>
        }
      ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
