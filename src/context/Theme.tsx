import { createContext, useContext, useEffect, useState } from 'react'
import { PropsType, ThemeContextType } from '../types/ThemeType'
import { AuthContext } from './Auth'
import { editTheme } from '../api/User'
import { UserType } from '../types/LoginType'

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType )

export const ThemeProvider = ({ children }: PropsType) => {
    const [ theme, setTheme ] = useState<string | undefined>("")
    const { user } = useContext(AuthContext);

    useEffect(() => {
        setTheme(user?.theme)
    }, [user?.theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")

        const userObject: UserType = {
            fullname: user?.fullname,
            password: user?.password,
            email: user?.email,
            whatsapp: user?.whatsapp,
            type: user?.type,
            theme: theme
        }

        editTheme(user?.id, userObject)

        localStorage.removeItem("@FFD:user")
        localStorage.setItem("@FFD:user", JSON.stringify(userObject))
    }
    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}