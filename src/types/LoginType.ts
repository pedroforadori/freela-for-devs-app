import { ReactNode } from "react";

export type LoginType = {
    user: {
        id?: string;
        fullname?: string;
        email?: string;
        whatsapp?: string;
        type?: number;
        theme?: string;
    } | null;
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuth: boolean;
    loading: boolean;
}

export type PropsType = {
    children?: ReactNode
}