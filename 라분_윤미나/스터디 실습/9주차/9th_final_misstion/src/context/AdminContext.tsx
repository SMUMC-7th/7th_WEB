import { createContext, useState, useContext, PropsWithChildren } from "react";

type TAuthContext = {
  isRole: string | null;
  setIsRole: (role: string) => void;
};

const AdminContext = createContext<TAuthContext | null>(null);

export const AdminProvider = ({ children }: PropsWithChildren) => {
  const [isRole, setIsRole] = useState<string | null>(null);

  return (
    <AdminContext.Provider
      value={{
        isRole,
        setIsRole,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export function useAdminContext() {
  const context = useContext(AdminContext);
  if (context == null) {
    throw new Error("AdminProvider를 찾을 수 없습니다.");
  }

  return context;
}
