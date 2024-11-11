import { createContext } from 'react';
import { useState } from 'react';

const accessToken = localStorage.getItem('accessToken');

export const IsLoginContext = createContext({
    isLogin: accessToken !== null ? true : false,
});
export function IsLoginProvider({ children }) {
    console.log(accessToken);
    const [isLogin, setIsLogin] = useState(accessToken !== null ? true : false);
    return (
        <IsLoginContext.Provider
            value={{
                isLogin,
                setIsLogin,
            }}
        >
            {children}
        </IsLoginContext.Provider>
    );
}
