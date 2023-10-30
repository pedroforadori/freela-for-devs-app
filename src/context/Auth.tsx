import { createContext, useState } from "react";
import { DataType, LoginType, PropsType } from "../types/LoginType";

export const AuthContext = createContext<LoginType>({} as LoginType);

export const AuthProvider = ({ children }: PropsType) => {
  const [id, setId] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [type, setType] = useState(0);
  const [isAuth, setIsAuth] = useState(false);

  const login = (data: DataType) => {
    const { id, fullname, email, whatsapp, type }: DataType = data;

    setId(id);
    setFullname(fullname);
    setEmail(email);
    setWhatsapp(whatsapp);
    setType(type);
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider
      value={{ id, fullname, email, whatsapp, type, isAuth, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
