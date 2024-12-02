import {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";

import Cookies from "universal-cookie";

type TAuthContext = {
  isLogin: boolean;
  setIsLogin: (state: boolean) => void;
  userName: string | null;
  setUserName: (name: string | null) => void;
  userId: number | null;
  setUserId: (id: number | null) => void;
  myPostNumber: number | null;
  setMyPostNumber: (number: number | null) => void;
  getCookie: (cookie: string) => string;
  token: string;
};

const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [myPostNumber, setMyPostNumber] = useState<number | null>(null);

  const cookies = new Cookies();
  const getCookie = (name: string) => {
    return cookies.get(name);
  };
  const token = getCookie("accessToken");

  useEffect(() => {
    if (userName) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [userName]);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userName,
        setUserName,
        userId,
        setUserId,
        myPostNumber,
        setMyPostNumber,

        getCookie,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context == null) {
    throw new Error("AuthProvider를 찾을 수 없습니다.");
  }

  return context;
}
