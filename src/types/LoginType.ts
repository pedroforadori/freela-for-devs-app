import { ReactNode } from "react";

export type LoginType = {
    id: string;
    fullname: string;
    email: string;
    whatsapp: string;
    type: number;
    isAuth: boolean;
    login: (data: DataType) => void
}

export type DataType = {
    id: string;
    fullname: string;
    email: string;
    whatsapp: string;
    type: number;
}

export type PropsType = {
    children?: ReactNode
}