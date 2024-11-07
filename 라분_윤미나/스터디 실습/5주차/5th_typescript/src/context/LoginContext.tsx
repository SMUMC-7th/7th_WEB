import { createContext, useState, ReactNode } from "react";

export interface ILoginContextProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  handleLogout: () => void;
}

export const loginContext = createContext<ILoginContextProps | undefined>(
  undefined
);

export function LoginContextProvider({ children }: { children: ReactNode }) {
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
