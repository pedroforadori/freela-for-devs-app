import { createContext, useState } from 'react'
import { PropsType, ThemeContextType } from '../types/ThemeType'

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