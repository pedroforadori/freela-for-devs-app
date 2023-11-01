import { LoginType, UserType } from "../types/loginType";
import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_API_URL

export const editUser = async (user?: UserType) => {
  const response = await axios.put(`${baseUrl}/user/${user?.id}`, {
    Fullname: user?.fullname,
    Email: user?.email,
    Password: user?.password,
    Whatsapp: user?.whatsapp,
    Type: user?.type,
    Theme: user?.theme
  });

  console.log(response)

  if (response.status !== 200 ) {
    throw new Error("Something went wrong");
  }

  const data: LoginType = await response.data;

  return data;
};

export const newUser = async (user?: UserType) => {
  const response = await axios.post(`${baseUrl}/user`, {
    Fullname: user?.fullname,
    Email: user?.email,
    Password: user?.password,
    Whatsapp: user?.whatsapp,
    Type: user?.type,
    Theme: user?.theme
  });

  if (response.status !== 201) {
    throw new Error("Something went wrong");
  }

  const data: LoginType = await response.data;

  return data;
};