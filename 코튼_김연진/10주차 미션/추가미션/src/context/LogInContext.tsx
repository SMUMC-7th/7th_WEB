import { PropsWithChildren, useContext, createContext, useState } from 'react';
import { Cookies } from 'react-cookie';

interface IAuthContextValue {
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
    userName: string | undefined;
    setUserName: (userName: string) => void;
    role: string | undefined;
    setRole: (role: string) => void;
    userId: string | undefined;
    setUserId: (userName: string) => void;
}

const AuthContext = createContext<IAuthContextValue>({
    isLogin: false,
    setIsLogin: () => {},
    userName: undefined,
    setUserName: () => {},
    role: undefined,
    setRole: () => {},
    userId: undefined,
    setUserId: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const cookies = new Cookies();
    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');

    const [role, setRole] = useState<string | undefined>(undefined);
    const [isLogin, setIsLogin] = useState<boolean>(
        accessToken != null && refreshToken != null ? true : false
    );
    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [userId, setUserId] = useState<string | undefined>(undefined);

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                setIsLogin,
                userName,
                setUserName,
                role,
                setRole,
                userId,
                setUserId,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
    const context = useContext(AuthContext);

    if (context == null) {
        throw new Error('AuthProvider를 찾을 수 없습니다.');
    }

    return context;
}
