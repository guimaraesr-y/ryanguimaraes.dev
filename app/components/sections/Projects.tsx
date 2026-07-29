"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import { projects } from "@/app/data/projects";
import type { Project } from "@/app/types";

function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const itemRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <article
      ref={itemRef}
      className="relative grid items-center gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-10 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={`md:col-span-7 ${index % 2 ? "md:order-2" : ""}`}
      >
        <div className="project-image relative aspect-[5/3] overflow-hidden bg-paper">
          {project.image ? (
            <motion.div
              style={{ y: prefersReducedMotion ? 0 : imageY }}
              className="absolute -inset-y-12 inset-x-0"
            >
              <Image
                src={project.image}
                alt={`Visual conceitual do projeto ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>
          ) : null}
          <div className="handwritten absolute left-4 top-4 -rotate-2 bg-paper px-3 py-2 text-sm font-bold text-ink">
            projeto 0{index + 1}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className={`md:col-span-5 ${index % 2 ? "md:order-1" : ""}`}
      >
        <p className="text-sm font-semibold text-acid/90">{project.eyebrow}</p>
        <h3 className="display mt-5 text-4xl leading-none text-paper sm:text-5xl">
          {project.title}
        </h3>
        {project.metric ? (
          <p className="mt-6 text-sm font-semibold text-acid">
            O que ficou: {project.metric}
          </p>
        ) : null}
        <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="text-xs text-paper/60">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 bg-paper px-4 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              Abrir projeto
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 border border-line px-4 py-3 text-sm font-semibold text-paper hover:border-paper/40"
            >
              <FaGithub className="h-4 w-4" />
              Código
            </a>
          ) : null}
        </div>
      </motion.div>
    </article>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 pb-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="section-label">Projetos que valem uma conversa</p>
            <h2 className="display mt-5 max-w-[15ch] text-5xl leading-[0.96] text-paper sm:text-6xl">
              Projetos que me deram trabalho — e alguma coisa para contar.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted md:col-span-4 md:justify-self-end">
            Não são só vitrines: cada um guarda uma decisão difícil, um erro útil
            ou uma ideia que eu levaria para o próximo.
          </p>
        </div>

        {featuredProjects.map((project, index) => (
          <ProjectFeature key={project.id} project={project} index={index} />
        ))}

        <div className="mt-10 border-t border-line">
          <div className="grid gap-4 py-8 md:grid-cols-12">
            <p className="handwritten -rotate-1 text-lg font-bold text-acid md:col-span-3">
              outras coisas da bancada
            </p>
            <div className="md:col-span-9">
              {otherProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="group grid gap-4 border-b border-line py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center"
                >
                  <span className="mono text-xs text-muted">{String(index + 4).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-paper transition-colors group-hover:text-acid">
                      {project.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-muted">{project.description}</p>
                  </div>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.title} no GitHub`}
                      className="focus-ring justify-self-start border border-line p-3 text-paper transition-colors hover:border-acid hover:text-acid sm:justify-self-end"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-xs text-muted">
                      projeto interno
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
