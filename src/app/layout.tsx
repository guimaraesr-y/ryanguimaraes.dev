import type { Metadata } from "next";
import "./globals.css";

import { config as dotenv } from 'dotenv-safe';
dotenv();

const APP_URL = process.env.APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(APP_URL),
    title: "Ryan Guimarães - Full-Stack Developer",
    description: "Bem vindo ao meu espaço pessoal na grande rede! Eu sou um desenvolvedor full-stack :)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
