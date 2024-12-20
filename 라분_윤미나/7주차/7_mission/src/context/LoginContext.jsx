import { createContext, useEffect, useState } from "react";
export const loginContext = createContext();

export function LoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [accessToken]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLogin(false);
    setUserName("");
    setAccessToken("");
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
