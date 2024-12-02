import React, { createContext, useState, ReactNode, useEffect } from 'react';

const ThemeContext = createContext<{
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    theme: true,
    setTheme: () => {},
});

interface ThemeProviderProps {
    children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
    const storedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState<boolean>(
        storedTheme ? JSON.parse(storedTheme) : true
    );

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
