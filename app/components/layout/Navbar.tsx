"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/app/data/constants";

interface NavbarProps {
  contactEmail?: string;
}

export function Navbar({ contactEmail }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Navegação principal"
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-background/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#" className="focus-ring group" aria-label="Voltar ao início">
            <span className="handwritten block text-lg font-bold text-paper transition-colors group-hover:text-acid">
              Ryan Guimarães
            </span>
            <span className="mt-0.5 hidden text-[0.65rem] text-muted sm:block">
              meu espaço (nada privado) na web
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="focus-ring text-xs font-semibold text-muted transition-colors hover:text-paper"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-xs font-semibold text-muted hover:text-paper"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="focus-ring bg-acid px-4 py-2.5 text-xs font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              me chama
            </a>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="focus-ring grid h-11 w-11 place-items-center border border-line text-paper lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-background px-5 pb-8 pt-28 lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="border-t border-line">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="focus-ring display flex w-full items-center justify-between border-b border-line py-5 text-left text-4xl text-paper"
                  >
                    {link.name}
                    <span className="handwritten text-sm text-muted">vai ↘</span>
                  </button>
                ))}
              </div>
              <div className="mt-auto flex items-end justify-between border-t border-line pt-5">
                <p className="max-w-[14rem] text-xs leading-5 text-muted">
                    Meu canto na web. Feito no Rio, mexido aos poucos e sempre em construção.
                </p>
                {contactEmail ? (
                  <a
                    href={`mailto:${contactEmail}`}
                    className="focus-ring bg-acid px-4 py-3 text-xs font-bold text-ink"
                  >
                    E-mail
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => scrollToSection("#contact")}
                    className="focus-ring bg-acid px-4 py-3 text-xs font-bold text-ink"
                  >
                    Contato
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
