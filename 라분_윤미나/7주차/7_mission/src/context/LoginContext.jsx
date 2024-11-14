import { createContext, useState } from "react";
export const loginContext = createContext();

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLogin(false);
    setUserName("");
  };

  return (
    <loginContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userName,
        setUserName,
        accessToken,
        setAccessToken,
        handleLogout,
      }}
    >
      {children}
    </loginContext.Provider>
  );
}
