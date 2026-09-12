"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/app/data/articles";
import { personalInfo } from "@/app/data/constants";

export function Writing() {
  return (
    <section id="writing" className="bg-paper py-24 text-ink lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 pb-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="section-label !text-electric">Código também vira texto</p>
            <h2 className="display mt-5 max-w-[15ch] text-balance text-[2.5rem] leading-[1] sm:text-6xl sm:leading-[0.96]">
              Algumas coisas que aprendi e resolvi escrever.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-ink/65 md:col-span-4 md:justify-self-end">
            Notas sobre manutenção, performance e as decisões pequenas que fazem um sistema durar mais.
          </p>
        </div>

        <div className="border-t border-ink/20">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.16) }}
              className="grid gap-4 border-b border-ink/20 py-7 md:grid-cols-[5.5rem_1fr_auto] md:items-center md:gap-8"
            >
              <p className="mono text-xs text-ink/45">{article.publishedAt}</p>
              <div>
                <h3 className="max-w-3xl text-lg font-semibold leading-6 sm:text-xl">{article.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/65">{article.description}</p>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ler ${article.title} no Medium`}
                className="focus-ring inline-flex w-fit items-center gap-2 border-b border-ink pb-1 text-sm font-bold transition-colors hover:text-electric hover:border-electric"
              >
                Ler
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>

        <a
          href={personalInfo.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-9 inline-flex items-center gap-2 bg-ink px-5 py-3.5 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5"
        >
          Ver todos os artigos no Medium
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
