import { createContext, useEffect, useState } from "react";
import { LoginType, PropsType } from "../types/LoginType";
import { auth } from "../api/Auth";

export const AuthContext = createContext<LoginType>({} as LoginType);

export const AuthProvider = ({ children }: PropsType) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading ] = useState(true)
  
  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem("@FFD:user")

      if(storageUser){
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
    }

    loadStorageData()
  }, [])

  const login = async (email: string, password: string) => {
    const response = await auth(email, password)
    setUser(response)
    localStorage.setItem("@FFD:user", JSON.stringify(response))
  };

  const logout = () => {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuth: !!user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
