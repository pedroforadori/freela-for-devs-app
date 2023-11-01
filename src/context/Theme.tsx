import { createContext, useContext, useEffect, useState } from 'react'
import { PropsType, ThemeContextType } from '../types/themeType'
import { UserContext } from './user'
import { editUser } from '../api/user'
import { UserType } from '../types/loginType'

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType )

export const ThemeProvider = ({ children }: PropsType) => {
    const [ theme, setTheme ] = useState<string | undefined>("")
    const { user } = useContext(UserContext);

    useEffect(() => {
        setTheme(user?.theme)
        
    }, [user?.theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")

        const userObject: UserType = {
            id: user?.id,
            fullname: user?.fullname,
            password: user?.password,
            email: user?.email,
            whatsapp: user?.whatsapp,
            type: user?.type,
            theme: theme === "light" ? "dark" : "light"
        }

        editUser(userObject)

        localStorage.removeItem("@FFD:user")
        localStorage.setItem("@FFD:user", JSON.stringify(userObject))
    }
    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}