import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

export function UserContextProvider({ children }) {
  const accessToken = localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null;
  const [isLogin, setIsLogin] = useState(accessToken ? true : false);
  const [username, setUsername] = useState(accessToken ? accessToken : null);

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

export function useAuthContext() {
  const context = useContext(userContext);

  if (context == null) {
    throw new Error("AuthProvider를 찾을 수 없습니다.");
  }

  return context;
}
