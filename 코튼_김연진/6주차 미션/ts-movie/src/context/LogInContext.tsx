import { createContext, useState } from 'react';

const accessToken = localStorage.getItem('accessToken');

// eslint-disable-next-line react-refresh/only-export-components
export const IsLoginContext = createContext<{
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    isLogin: accessToken !== null,
    setIsLogin: () => {},
});

export function IsLoginProvider({ children }: { children: React.ReactNode }) {
    const [isLogin, setIsLogin] = useState(accessToken !== null);

    return (
        <IsLoginContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </IsLoginContext.Provider>
    );
}
