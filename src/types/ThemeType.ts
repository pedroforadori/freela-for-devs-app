import { ReactNode } from "react";

export type ThemeContextType = {
    theme: string | null;
    toggleTheme: () => void;
}

export type PropsType = {
    children?: ReactNode
}