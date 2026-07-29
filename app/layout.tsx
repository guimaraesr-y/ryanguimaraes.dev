import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ryanguimaraes.dev"),
  applicationName: "Portfólio de Ryan Guimarães",
  title: {
    default: "Ryan Guimarães | Full-Stack Developer",
    template: "%s | Ryan Guimarães",
  },
  description:
    "Portfólio de Ryan Guimarães, desenvolvedor Full-Stack no Rio de Janeiro. Projetos, experiência e trabalho com backend, integrações e sistemas em produção.",
  keywords: [
    "Full-Stack Developer",
    "Desenvolvedor Full Stack",
    "Backend Developer",
    "Python",
    "Java",
    "TypeScript",
    "PHP",
    "React",
    "Next.js",
    "Docker",
    "Django",
    "Spring Boot",
    "Laravel",
    "Desenvolvedor Web",
    "Desenvolvedor Backend",
    "Desenvolvedor Frontend",
    "Rio de Janeiro",
    "Brasil",
    "Programador",
    "Desenvolvimento Web",
    "API RESTful",
  ],
  authors: [{ name: "Ryan Guimarães", url: "https://github.com/guimaraesr-y" }],
  creator: "Ryan Guimarães",
  publisher: "Ryan Guimarães",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ryanguimaraes.dev",
    siteName: "Ryan Guimarães",
    title: "Ryan Guimarães | Full-Stack Developer",
    description:
      "Desenvolvedor Full-Stack no Rio de Janeiro. Backend, integrações e sistemas em produção.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Guimarães | Full-Stack Developer",
    description:
      "Desenvolvedor Full-Stack no Rio de Janeiro. Backend, integrações e sistemas em produção.",
    creator: "@guimaraesr_y",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg?v=2", type: "image/svg+xml" }],
    apple: "/favicon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          property="og:logo"
          content="https://ryanguimaraes.dev/favicon.svg?v=2"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
