import { createContext, useContext, useState } from "react";

interface IAuthContextValue {
  username: string | null;
  setUsername: (usernames: string) => void | null;
}

const AuthContext = createContext<IAuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren): Element => {
  const [username, setUsername] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): IAuthContextValue {
  const context = useContext(AuthContext);

  if (context == null) {
    throw new Error("AuthProvider를 찾을 수 없습니다.");
  }

  return context;
}
