"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/app/data/constants";
import {
  FaReact, FaNodeJs, FaPython, FaPhp, FaJava, FaDocker, FaGitAlt, FaAws, FaLinux,
  FaHtml5, FaCss3, FaJs, FaDatabase
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiDjango, SiSpring, SiLaravel, SiMysql, SiPostgresql, SiMongodb, SiExpress } from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: FaJs,
  css: FaCss3,
  html: FaHtml5,
  nodejs: FaNodeJs,
  express: SiExpress,
  python: FaPython,
  php: FaPhp,
  java: FaJava,
  django: SiDjango,
  spring: SiSpring,
  laravel: SiLaravel,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  docker: FaDocker,
  git: FaGitAlt,
  aws: FaAws,
  linux: FaLinux,
};

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas <span className="text-violet-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/5 hover:border-violet-500/50 hover:bg-white/10 transition-all cursor-default"
                      >
                        {Icon && <Icon className="w-4 h-4 text-violet-400" />}
                        <span className="text-white/70 text-sm">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
