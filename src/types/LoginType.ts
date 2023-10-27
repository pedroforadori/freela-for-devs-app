import { ReactNode } from "react";

export type LoginType = {
    id: string;
    fullname: string;
    email: string;
    whatsapp: string;
    type: number;
    isAuth: boolean;
    login: (email: string, password: string) => void
}

export type PropsType = {
    children?: ReactNode
}