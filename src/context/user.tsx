import { createContext, useEffect, useState } from "react";
import { LoginType, PropsType, UserType } from "../types/LoginType";
import { auth } from "../api/Auth";
import { newUser } from "../api/User";

export const AuthContext = createContext<LoginType>({} as LoginType);

export const AuthProvider = ({ children }: PropsType) => {
  const [user, setUser] = useState<object | null>(null);
  const [error, setError] = useState("")
  const [loading, setLoading ] = useState(true)
  
  useEffect(() => {
    async function loadStorageData() {
      setLoading(false)
      const storageUser = localStorage.getItem("@FFD:user")

      if(storageUser){
        setUser(JSON.parse(storageUser))
      }
    }

    loadStorageData()
  }, [])

  const login = async (email: string, password: string) => {
    const response = await auth(email, password)
    setUser(response)
    if(!response) {
      setError("Usuário e/ou senha invalidos!!")
      setTimeout(() => {
        setError("")
      }, 3000);
      
    }
    localStorage.setItem("@FFD:user", JSON.stringify(response))
  };

  const create = async (user: UserType) => {
    const response = await newUser(user)

    if(!response.errorMessage) {
      setUser(response)
      
    }else {
      setError("E-mail já está cadastrado!")
      setTimeout(() => {
        setError("")
      }, 3000);
    }
    localStorage.setItem("@FFD:user", JSON.stringify(response))
  }

  const logout = () => {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuth: !!user, loading, error, create }}
    >
      {children}
    </AuthContext.Provider>
  );
};
