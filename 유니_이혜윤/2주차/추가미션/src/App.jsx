import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/root-layout";
import Cards from "./components/Cards";
import UmcPage from "./pages/UmcPage/UmcPage";
import PingPage from "./pages/PingPage/PingPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Cards />,
      },
      {
        path: "umc",
        element: <UmcPage />,
      },
      {
        path: "ping",
        element: <PingPage />,
      },
      {
        path: "details/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
