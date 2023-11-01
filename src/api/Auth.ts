import { LoginType } from "../types/loginType";
import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_API_URL

export const auth = async (email: string, password: string) => {
  const response = await axios.post(`${baseUrl}/auth`, {
    email: email,
    password: password,
  });

  if (response.status !== 200) {
    throw new Error("Something went wrong");
  }

  const data: LoginType = await response.data;

  return data;
};
