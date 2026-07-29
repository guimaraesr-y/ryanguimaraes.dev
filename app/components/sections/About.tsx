"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo, stats } from "@/app/data/constants";

const certifications = ["Cybersecurity · IBSEC", "Cisco Cybersecurity", "AWS Cloud Discovery"];

export function About() {
  return (
    <section id="about" className="bg-paper py-24 text-ink lg:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-label !text-electric">Sobre mim, sem muita cerimônia</p>
            <div className="mt-8 max-w-sm space-y-4 text-sm leading-6 text-ink/65">
              <p>
                Moro no <strong className="font-semibold text-ink">{personalInfo.location}</strong> e
                quase sempre começo pelo backend.
              </p>
              <p>
                Hoje trabalho como <strong className="font-semibold text-ink">Desenvolvedor
                Back-end Jr. na inChurch</strong>, entre integrações, produto e sistemas que já
                têm bastante história.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="display max-w-[16ch] text-balance text-[2.5rem] leading-[1] sm:text-6xl sm:leading-[0.98]"
            >
              Eu não planejei “ser full-stack”. Só nunca gostei de parar na metade do problema.
            </motion.h2>
            <div className="mt-10 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-2">
              <p className="text-base leading-8 text-ink/70">
                Comecei dando suporte, cuidando de laboratório e construindo ferramentas
                pequenas. Depois vieram sistemas legados, integrações entre plataformas,
                APIs e automações que precisavam funcionar para equipes de verdade.
              </p>
              <div>
                <p className="text-base leading-8 text-ink/70">
                  Eu penso em manutenção, observabilidade, segurança e clareza para quem vai
                  operar o produto depois da entrega. Gosto de código elegante, mas gosto ainda
                  mais quando alguém consegue manter esse código seis meses depois.
                </p>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-bold"
                >
                  Ver trajetória no LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-y border-ink/20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-ink/20 px-0 py-7 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="display text-4xl sm:text-5xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs leading-5 text-ink/55">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-[1fr_3fr] md:items-start">
          <p className="text-xs font-semibold text-ink/50">
            algumas coisas que estudei
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {certifications.map((certification) => (
              <li key={certification} className="text-sm font-semibold">
                {certification}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-5 border-t border-ink/20 pt-10 md:grid-cols-3">
          <div className="paper-note rotate-[-1.5deg] bg-[#f7d56b] p-6">
            <p className="handwritten text-lg font-bold">coisas que aprendi</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Legado não é sinônimo de código ruim. Muitas vezes é só código que sobreviveu.
            </p>
          </div>
          <div className="paper-note rotate-[1deg] bg-acid p-6">
            <p className="handwritten text-lg font-bold">regra pessoal</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Se eu não consigo explicar a decisão, provavelmente ainda não entendi o problema.
            </p>
          </div>
          <div className="paper-note rotate-[-0.5deg] bg-[#b9c8ff] p-6">
            <p className="handwritten text-lg font-bold">um detalhe importante</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Documentação, segurança e observabilidade também fazem parte da experiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
