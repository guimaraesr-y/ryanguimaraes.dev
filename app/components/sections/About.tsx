"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { personalInfo, stats } from "@/app/data/constants";
import { FaGithub, FaLinkedin, FaEnvelope, FaCertificate } from "react-icons/fa";

function useCountUp(endValue: number) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, endValue]);

  return { ref, count };
}

function StatItem({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { ref, count } = useCountUp(value);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500"
      >
        {count}
        {suffix}
      </span>
      <p className="text-white/60 text-sm mt-1">{label}</p>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-violet-500">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src="/pfp.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-violet-500 transition-all"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-violet-500 transition-all"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 bg-white/5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-violet-500 transition-all"
              >
                <FaEnvelope className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Desenvolvedor Full-Stack
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6 whitespace-pre-line">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <StatItem key={index} {...stat} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <FaCertificate className="text-violet-400" />
                <span className="text-white/80 text-sm">Cybersecurity (IBSEC)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <FaCertificate className="text-cyan-400" />
                <span className="text-white/80 text-sm">Cisco Cybersec</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <FaCertificate className="text-violet-400" />
                <span className="text-white/80 text-sm">AWS Discovery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
