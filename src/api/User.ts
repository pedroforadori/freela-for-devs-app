import { LoginType, UserType } from "../types/LoginType";
import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_API_URL

export const editTheme = async (id?: string, user?: UserType) => {
  const response = await axios.put(`${baseUrl}/user/${id}`, {
    Fullname: user?.fullname,
    Email: user?.email,
    Password: user?.password,
    Whatsapp: user?.whatsapp,
    Type: user?.type,
    Theme: user?.theme
  });

  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }

  const data: LoginType = await response.data;

  return data;
};
