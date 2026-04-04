import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ryanguimaraes.dev"),
  title: {
    default: "Ryan Guimarães | Full-Stack Developer",
    template: "%s | Ryan Guimarães",
  },
  description: "Desenvolvedor Full-Stack com domínio em Python, TypeScript, PHP e Java. Especialista em arquiteturas modernas como Django, Spring Boot e Laravel. Criando soluções escaláveis e de alta qualidade.",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ryanguimaraes.dev",
    siteName: "Ryan Guimarães",
    title: "Ryan Guimarães | Full-Stack Developer",
    description: "Desenvolvedor Full-Stack com domínio em Python, TypeScript, PHP e Java. Especialista em arquiteturas modernas como Django, Spring Boot e Laravel.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ryan Guimarães - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Guimarães | Full-Stack Developer",
    description: "Desenvolvedor Full-Stack com domínio em Python, TypeScript, PHP e Java.",
    images: ["/og-image.svg"],
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
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
