import { createContext, useState, ReactNode } from 'react';

interface LoginContextTyoe {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

// 데이터 담고 있음
export const LoginContext = createContext<LoginContextTyoe>({
  isLogin: false,
  setIsLogin: () => {},
});

interface LoginContextProviderProps {
  children: ReactNode;
}

// 데이터를 감싸는 우산을 만듦
export function LoginContextProvider({ children }: LoginContextProviderProps) {
  const accessToken = localStorage.getItem('accessToken') || null;

  const [isLogin, setIsLogin] = useState(accessToken === null ? false : true);

  return (
    <LoginContext.Provider value={{ setIsLogin, isLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
