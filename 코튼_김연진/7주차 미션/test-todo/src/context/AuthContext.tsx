import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface IAuthContextValue {
  username: string | null;
  setUsername: (username: string | null) => void;
}

const AuthContext = createContext<IAuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context == null) {
    throw new Error('AuthProvider를 찾을 수 없습니다.');
  }

  return context;
}
