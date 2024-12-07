import { createContext, ReactNode, useState } from 'react';
import { Cookies } from 'react-cookie';

interface ILoginContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILoginContextProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext<ILoginContextType>({
  isLogin: false,
  setIsLogin: () => {},
});

const cookies = new Cookies();

export function LoginContextProvider({ children }: ILoginContextProviderProps) {
  const accessToken = cookies.get('accessToken') || null;

  const [isLogin, setIsLogin] = useState(accessToken === null ? false : true);

  return <LoginContext.Provider value={{ setIsLogin, isLogin }}>{children}</LoginContext.Provider>;
}
