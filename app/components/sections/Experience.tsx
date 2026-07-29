"use client";

import { motion } from "framer-motion";
import { experiences } from "@/app/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-rule py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 pb-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="section-label text-coral">Trabalho também muda a gente</p>
            <h2 className="display mt-5 max-w-[15ch] text-balance text-[2.5rem] leading-[1] text-paper sm:text-6xl sm:leading-[0.96]">
              Cada lugar mudou meu jeito de trabalhar.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted md:col-span-4 md:justify-self-end">
            Comecei perto de quem usava o sistema. Quero continuar assim,
            mesmo quando o trabalho acontece muitas camadas abaixo da interface.
          </p>
        </div>

        <div className="border-t border-line">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.18) }}
              className="grid gap-6 border-b border-line py-9 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="text-sm leading-5 text-muted">
                  {experience.period}
                </p>
                {index === 0 ? (
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-acid">
                    <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                    onde estou agora
                  </span>
                ) : null}
              </div>
              <div className="md:col-span-4">
                <h3 className="display text-3xl leading-none text-paper">
                  {experience.role}
                </h3>
                <p className="mt-3 text-sm font-bold text-acid">{experience.company}</p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {experience.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="text-xs text-paper/55"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-3 md:col-span-5">
                {experience.description.map((description) => (
                  <li
                    key={description}
                    className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-6 text-muted"
                  >
                    <span aria-hidden="true" className="text-acid/70">↳</span>
                    {description}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
