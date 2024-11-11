import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

function UserContextProvider({ children }) {
  const accessToken = localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null;
  const [isLogin, setIsLogin] = useState(accessToken ? true : false);
  const [username, setUsername] = useState();

  return (
    <userContext.Provider
      value={{
        isLogin,
        setIsLogin,
        username,
        setUsername,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
