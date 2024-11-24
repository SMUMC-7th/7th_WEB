import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export type TUserContextData = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  username: string | null;
  setUsername: (username: string | null) => void;
};

export const basicData: TUserContextData = {
  isLogin: false,
  setIsLogin: () => console.log("set"),
  username: "guest",
  setUsername: () => console.log("set2"),
};

export const userContext: React.Context<TUserContextData> =
  createContext(basicData);

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

export function useAuthContext(): TUserContextData {
  const context = useContext(userContext);

  if (context == null) {
    throw new Error("AuthProvider를 찾을 수 없습니다.");
  }

  return context;
}
