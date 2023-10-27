import { createContext, useState } from "react"
import { LoginType, PropsType } from "../types/LoginType"
import { auth } from "../api/Auth"

export const AuthContext = createContext<LoginType>({} as LoginType);

export const AuthProvider = ({ children }: PropsType) => {
  const [id, setId] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [type, setType] = useState(0)
  const [isAuth, setIsAuth] = useState(false)

  const login = (email: string, password: string) => {
    auth(email, password).then((response: LoginType) => {
      const data: LoginType = response;

      setId(data.id)
      setFullname(data.fullname)
      setEmail(data.email)
      setWhatsapp(data.whatsapp)
      setType(data.type)
      setIsAuth(true)

    });
  };

  return (
    <AuthContext.Provider
      value={{ id, fullname, email, whatsapp, type, isAuth, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
