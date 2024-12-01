import {
    PropsWithChildren,
    useContext,
    createContext,
    useState,
    useEffect,
} from 'react';

interface IAuthContextValue {
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
}

const AuthContext = createContext<IAuthContextValue>({
    isLogin: false,
    setIsLogin: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLogin, setIsLogin] = useState<boolean>(() => {
        return localStorage.getItem('isLogin') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isLogin', String(isLogin));
    }, [isLogin]);

    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
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
