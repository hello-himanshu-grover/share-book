'use client'
import { ThemeProvider, createTheme } from "@mui/material";
import getLPTheme from '../getLPTheme';

export default function PortalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const LPtheme = createTheme(getLPTheme('light'));

    return (
        <ThemeProvider theme={LPtheme}>{children}</ThemeProvider>
    );
}
