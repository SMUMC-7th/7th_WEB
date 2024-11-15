import { createContext, useState, ReactNode } from 'react';

interface LoginContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  refreshToken: string;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
}

// 데이터 담고 있음
export const LoginContext = createContext<LoginContextType>({
  isLogin: false,
  setIsLogin: () => {},
  accessToken: '',
  setAccessToken: () => {},
  refreshToken: '',
  setRefreshToken: () => {},
});

interface LoginContextProviderProps {
  children: ReactNode;
}

// 데이터를 감싸는 우산을 만듦
export function LoginContextProvider({ children }: LoginContextProviderProps) {
  const storedAccessToken = localStorage.getItem('accessToken') || '';
  const storedRefreshToken = localStorage.getItem('refreshToken') || '';

  const [isLogin, setIsLogin] = useState(storedAccessToken !== '');
  const [accessToken, setAccessToken] = useState(storedAccessToken);
  const [refreshToken, setRefreshToken] = useState(storedRefreshToken);

  return (
    <LoginContext.Provider
      value={{
        setIsLogin,
        isLogin,
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
