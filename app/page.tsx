import { Navbar } from "@/app/components/layout/Navbar";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Experience } from "@/app/components/sections/Experience";
import { Projects } from "@/app/components/sections/Projects";
import { Skills } from "@/app/components/sections/Skills";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/layout/Footer";

export default function Home() {
  const contactEmail = process.env.CONTACT_EMAIL;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Ryan Guimarães | Full-Stack Developer",
    url: "https://ryanguimaraes.dev",
    mainEntity: {
      "@type": "Person",
      name: "Ryan Guimarães",
      jobTitle: "Full-Stack Developer",
      url: "https://ryanguimaraes.dev",
      image: "https://ryanguimaraes.dev/pfp.png",
      homeLocation: {
        "@type": "Place",
        name: "Rio de Janeiro, Brasil",
      },
      sameAs: [
        "https://github.com/guimaraesr-y",
        "https://www.linkedin.com/in/guimaraesry/",
      ],
      knowsAbout: [
        "Backend development",
        "Web development",
        "Python",
        "TypeScript",
        "Django",
        "Ruby on Rails",
        "PostgreSQL",
        "System integrations",
      ],
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar contactEmail={contactEmail} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact contactEmail={contactEmail} />
      <Footer contactEmail={contactEmail} />
    </main>
  );
}
