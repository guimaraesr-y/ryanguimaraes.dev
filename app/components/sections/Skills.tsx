"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/data/constants";

const categoryDescriptions: Record<string, string> = {
  Frontend: "Interfaces de produto com atenção a estado, acessibilidade e performance.",
  Backend: "Serviços, regras de negócio e integrações que precisam continuar funcionando.",
  Frameworks: "Ferramentas escolhidas pelo problema, não por preferência de torcida.",
  Database: "Modelagem e consulta com custo, consistência e evolução em mente.",
  DevOps: "Ambientes reproduzíveis e software observável do desenvolvimento à produção.",
};

export function Skills() {
  return (
    <section id="skills" className="bg-electric py-24 text-white lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 pb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="section-label !text-white/75">Ferramentas, sem torcida</p>
            <h2 className="display mt-5 max-w-[13ch] text-balance text-[2.5rem] leading-[1] sm:text-6xl sm:leading-[0.96]">
              O que tenho usado ultimamente.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/70 md:col-span-4 md:justify-self-end">
            O que tenho usado para construir, manter e investigar — inclusive quando
            a resposta certa é aprender alguma coisa nova.
          </p>
        </div>

        <div className="border-t border-white/25">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.16) }}
              className="grid gap-5 border-b border-white/25 py-7 md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              <p className="text-sm leading-6 text-white/65 md:col-span-4">
                {categoryDescriptions[category.name]}
              </p>
              <ul className="flex flex-wrap gap-2 md:col-span-5 md:justify-end">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="border-b border-white/25 px-1 py-1 text-xs text-white/85"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
