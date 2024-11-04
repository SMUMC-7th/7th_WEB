import { createContext, useState } from 'react';

// 데이터 담고 있음
export const LoginContext = createContext();

// 데이터를 감싸는 우산을 만듦
export function LoginContextProvider({ children }) {
  const accessToken = localStorage.getItem('accessToken') || null;

  const [isLogin, setIsLogin] = useState(accessToken === null ? false : true);

  return (
    <LoginContext.Provider value={{ setIsLogin, isLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
