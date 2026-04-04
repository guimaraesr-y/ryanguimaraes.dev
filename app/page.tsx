import type { Metadata } from "next";
import { Navbar } from "@/app/components/layout/Navbar";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Experience } from "@/app/components/sections/Experience";
import { Projects } from "@/app/components/sections/Projects";
import { TerminalDemo } from "@/app/components/sections/TerminalDemo";
import { Skills } from "@/app/components/sections/Skills";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ryan Guimarães | Full-Stack Developer",
  description: "Desenvolvedor Full-Stack com domínio em Python, TypeScript, PHP e Java. Especialista em arquiteturas modernas como Django, Spring Boot e Laravel.",
  keywords: ["Full-Stack Developer", "Python", "Java", "TypeScript", "PHP", "React", "Next.js", "Docker"],
  authors: [{ name: "Ryan Guimarães" }],
  openGraph: {
    title: "Ryan Guimarães | Full-Stack Developer",
    description: "Desenvolvedor Full-Stack criando soluções escaláveis com Python, Java, TypeScript e PHP.",
    url: "https://ryanguimaraes.dev",
    siteName: "Ryan Guimarães",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TerminalDemo />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
