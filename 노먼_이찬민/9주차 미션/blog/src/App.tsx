import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

// 불러온 Router 파일에서 배열로 router라는 브라우저라우터를 생성
const router = createBrowserRouter(Router);

function App() {
  // 그걸 씀
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
