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
            <p className="eyebrow !text-acid">minha caixa de ferramentas</p>
            <h2 className="display mt-5 max-w-[12ch] text-5xl leading-[0.94] sm:text-7xl">
              As ferramentas mudam. A curiosidade fica.
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
                <span className="mono mr-4 text-[0.65rem] text-white/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="inline text-xl font-bold">{category.name}</h3>
              </div>
              <p className="text-sm leading-6 text-white/65 md:col-span-4">
                {categoryDescriptions[category.name]}
              </p>
              <ul className="flex flex-wrap gap-2 md:col-span-5 md:justify-end">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="mono border border-white/25 px-3 py-2 text-[0.66rem] uppercase tracking-[0.08em]"
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
