"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import { personalInfo } from "@/app/data/constants";

const proofPoints = [
  { value: "173 ms", label: "meu número favorito até agora" },
  { value: "3+ anos", label: "aprendendo em produção" },
  { value: "prod + legado", label: "onde eu me sinto em casa" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const markerY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden border-b border-line pt-24 sm:pt-28"
    >
      <div className="site-grid pointer-events-none absolute inset-0 opacity-70" />
      <motion.div
        aria-hidden="true"
        style={{ y: prefersReducedMotion ? 0 : markerY }}
        className="display pointer-events-none absolute -right-4 top-16 select-none text-[10rem] leading-none text-white/[0.025] sm:text-[18rem] lg:right-4 lg:text-[24rem]"
      >
        RG
      </motion.div>

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-14 pb-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div className="pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-9 flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <span className="text-sm font-bold text-paper">Oi, eu sou Ryan.</span>
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_18px_rgba(168,224,108,.7)]" />
              seguimos codando no Rio de Janeiro, Brasil
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="display max-w-[12ch] text-[clamp(2.9rem,7.3vw,7.2rem)] leading-[0.92] text-paper"
          >
            Gosto de entender
            <span className="block text-acid">por que quebrou.</span>
            <span className="block text-[0.68em] italic text-paper">E deixar melhor.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            Backend é meu ponto de partida, não uma caixa. Eu sigo o problema até onde
            ele pedir: arquitetura, integração, interface, deploy ou uma boa conversa com quem usa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-3 bg-acid px-5 py-3.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              Ver o que andei construindo
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-3 border border-line px-5 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/40 hover:bg-white/[0.04]"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-12 grid max-w-2xl grid-cols-3 border-y border-line"
          >
            {proofPoints.map((item) => (
              <div
                key={item.value}
                className="border-r border-line px-3 py-5 first:pl-0 last:border-r-0 sm:px-5"
              >
                <dt className="display text-xl text-paper sm:text-2xl">{item.value}</dt>
                <dd className="mt-1 text-[0.66rem] leading-4 text-muted sm:text-xs">
                  {item.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="relative mx-auto w-full max-w-lg pb-10 lg:mx-0"
        >
          <motion.div
            style={{ y: prefersReducedMotion ? 0 : portraitY }}
            className="rough-circle relative aspect-[4/5] overflow-hidden bg-[#242820]"
          >
            <Image
              src="/pfp.png"
              alt={`Retrato de ${personalInfo.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-center grayscale-[12%] contrast-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 text-xs text-paper/70">
              Rio de Janeiro · RJ
            </div>
          </motion.div>

          <div className="paper-note absolute -bottom-1 -left-3 max-w-[15rem] -rotate-2 bg-coral p-5 text-ink sm:-left-8 sm:p-6">
            <p className="handwritten text-base font-bold">
              hoje, na minha mesa:
            </p>
            <p className="mt-2 text-sm font-semibold leading-5 text-ink/80">
              Django, Rails, integrações e aquele bug que só aparece em produção.
            </p>
          </div>

          <div className="handwritten absolute -right-2 top-8 rotate-3 bg-acid px-4 py-2 text-sm font-bold text-ink sm:-right-10">
            curioso por sistemas inteiros ↗
          </div>
        </motion.div>
      </div>
    </section>
  );
}
