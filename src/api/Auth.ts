import { LoginType } from "../types/LoginType";
import axios from "axios";

const baseUrl = "http://localhost:5158";

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
