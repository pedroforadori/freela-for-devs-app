import { ReactNode, createContext, useState } from 'react'

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
}

type PropsType = {
    children?: ReactNode
}
export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType )

export const ThemeProvider = ({ children }: PropsType) => {
    const [ theme, setTheme ] = useState("light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}