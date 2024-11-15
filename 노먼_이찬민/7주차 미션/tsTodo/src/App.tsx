/* eslint-disable */
import { RouterProvider } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import router from "./routes/Router";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
