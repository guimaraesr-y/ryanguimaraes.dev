"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/app/data/constants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black/50 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">
              © {currentYear} <span className="text-white font-medium">{personalInfo.name}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-white/50 hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon === "github" && <FaGithub className="w-5 h-5" />}
                {link.icon === "linkedin" && <FaLinkedin className="w-5 h-5" />}
                {link.icon === "mail" && <FaEnvelope className="w-5 h-5" />}
                {link.icon === "twitter" && <FaGithub className="w-5 h-5" />}
              </motion.a>
            ))}
          </div>

          <p className="text-white/40 text-xs">
            Feito com <span className="text-violet-500">♥</span> usando Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
