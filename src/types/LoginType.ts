import { ReactNode } from "react";

export type LoginType = {
  user: {
    id?: string;
    fullname?: string;
    password?: string;
    email?: string;
    whatsapp?: string;
    type?: number;
    theme?: string;
  } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuth: boolean;
  loading: boolean;
  error: string;
  create: (user: UserType) => object;
  errorMessage?: string;
};

export type UserType = {
  id?: string;
  fullname?: string;
  password?: string;
  email?: string;
  whatsapp?: string;
  type?: number;
  theme?: string;

};

export type PropsType = {
  children?: ReactNode;
};
