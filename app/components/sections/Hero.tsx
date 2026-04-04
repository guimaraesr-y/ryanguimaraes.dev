"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/app/data/constants";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const strings = personalInfo.typedStrings;

  useEffect(() => {
    const currentString = strings[stringIndex];

    if (isDeleting) {
      const timer = setTimeout(() => {
        setDisplayText(currentString.substring(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText(currentString.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }

    if (!isDeleting && currentIndex === currentString.length) {
      const timer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timer);
    }

    if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % strings.length);
    }
  }, [currentIndex, isDeleting, stringIndex, strings]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle" style={{ left: '5%', top: '10%', animationDelay: '0s' }} />
        <div className="particle" style={{ left: '15%', top: '80%', animationDelay: '2s' }} />
        <div className="particle" style={{ left: '25%', top: '30%', animationDelay: '4s' }} />
        <div className="particle" style={{ left: '35%', top: '70%', animationDelay: '1s' }} />
        <div className="particle" style={{ left: '45%', top: '20%', animationDelay: '3s' }} />
        <div className="particle" style={{ left: '55%', top: '90%', animationDelay: '5s' }} />
        <div className="particle" style={{ left: '65%', top: '40%', animationDelay: '2.5s' }} />
        <div className="particle" style={{ left: '75%', top: '60%', animationDelay: '0.5s' }} />
        <div className="particle" style={{ left: '85%', top: '15%', animationDelay: '3.5s' }} />
        <div className="particle" style={{ left: '95%', top: '85%', animationDelay: '1.5s' }} />
        <div className="particle" style={{ left: '10%', top: '50%', animationDelay: '4.5s' }} />
        <div className="particle" style={{ left: '20%', top: '25%', animationDelay: '2.2s' }} />
        <div className="particle" style={{ left: '30%', top: '75%', animationDelay: '0.8s' }} />
        <div className="particle" style={{ left: '40%', top: '45%', animationDelay: '3.2s' }} />
        <div className="particle" style={{ left: '50%', top: '10%', animationDelay: '1.8s' }} />
        <div className="particle" style={{ left: '60%', top: '55%', animationDelay: '4.2s' }} />
        <div className="particle" style={{ left: '70%', top: '35%', animationDelay: '2.8s' }} />
        <div className="particle" style={{ left: '80%', top: '65%', animationDelay: '0.3s' }} />
        <div className="particle" style={{ left: '90%', top: '20%', animationDelay: '3.8s' }} />
        <div className="particle" style={{ left: '3%', top: '95%', animationDelay: '1.2s' }} />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-violet-400 text-lg mb-4 font-medium"
          >
            Olá, meu nome é
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500">
              {personalInfo.name}
            </span>
          </h1>

          <div className="text-2xl md:text-4xl text-white/80 h-16 flex items-center justify-center mb-6">
            <span className="border-r-2 border-violet-500 pr-2 animate-pulse">
              {displayText}
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mb-10"
          >
            {personalInfo.title} • Python • Java • TypeScript • PHP • Docker
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 transition-all duration-300"
            >
              Ver Projetos
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-300"
            >
              Falar Comigo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
