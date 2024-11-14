import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface IAuthContextValue {
  username: string | null;
  setUserName: (username: string | null) => void;
}

const AuthContext = createContext<IAuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [username, setUserName] = useState<string | null>(null);

  return <AuthContext.Provider value={{ username, setUserName }}>{children}</AuthContext.Provider>;
};

export function useAuthContext(): IAuthContextValue {
  const context = useContext(AuthContext);

  if (context == null) {
    throw new Error('AuthProvider를 찾을 수 없습니다.');
  }

  return context;
}
