"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const skills = [
  { src: '/imgs/technologies/python.svg', name: 'Python' },
  { src: '/imgs/technologies/nodejs.svg', name: 'Node' },
  { src: '/imgs/technologies/php.svg', name: 'PHP' },
  { src: '/imgs/technologies/java.svg', name: 'Java' },
  { src: '/imgs/technologies/mysql.svg', name: 'SQL' },
  { src: '/imgs/technologies/react.svg', name: 'React' },
  { src: '/imgs/technologies/spring.svg', name: 'Spring' },
  { src: '/imgs/technologies/next-js.svg', name: 'Next.JS' },
]


export default function SkillSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-16">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
        Habilidades
      </h1>
      <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl">
        Aqui vão algumas das tecnologias e ferramentas que eu domino. Eu estou sempre disposto a aprender e expandir meu conjunto de habilidades para estar atualizado com as últimas tendências em desenvolvimento.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-white text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
