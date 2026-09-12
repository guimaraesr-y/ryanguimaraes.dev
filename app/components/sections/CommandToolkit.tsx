"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ToolkitStage = "idle" | "bubble" | "vertical" | "terminal" | "typing" | "result";

const command = "sudo apt-get install dev-toolkit";

const toolkit = [
  { name: "TypeScript", detail: "linguagem" },
  { name: "Python", detail: "linguagem" },
  { name: "Next.js", detail: "web" },
  { name: "Django", detail: "framework" },
  { name: "PostgreSQL", detail: "banco de dados" },
  { name: "Docker", detail: "infraestrutura" },
];

export function CommandToolkit() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.45 });
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = useState<ToolkitStage>("idle");
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      const reducedMotionTimer = window.setTimeout(() => {
        setTypedCommand(command);
        setStage("result");
      }, 0);

      return () => window.clearTimeout(reducedMotionTimer);
    }

    const timers = [
      window.setTimeout(() => setStage("bubble"), 0),
      window.setTimeout(() => setStage("vertical"), 720),
      window.setTimeout(() => setStage("terminal"), 1260),
      window.setTimeout(() => setStage("typing"), 1800),
      ...Array.from({ length: command.length }, (_, index) =>
        window.setTimeout(() => setTypedCommand(command.slice(0, index + 1)), 1850 + index * 27),
      ),
      window.setTimeout(() => setStage("result"), 1850 + command.length * 27 + 520),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [isInView, prefersReducedMotion]);

  const hasStarted = stage !== "idle";
  const hasTerminal = ["terminal", "typing", "result"].includes(stage);
  const hasResult = stage === "result";
  const panelSize = hasResult
    ? "w-full"
    : hasTerminal
      ? "h-20 w-full"
      : stage === "vertical"
        ? "h-56 w-16"
        : "h-14 w-14";

  return (
    <section
      ref={sectionRef}
      aria-label="Ambiente de desenvolvimento"
      className="section-rule relative min-h-[40rem] overflow-hidden bg-[radial-gradient(ellipse_at_50%_100%,rgba(49,87,255,0.13),transparent_46%)] py-24 lg:min-h-[46rem] lg:py-32"
    >
      <div aria-hidden="true" className="site-grid absolute inset-0 opacity-50" />
      <div className="section-shell relative z-10">
        <div className="mx-auto flex min-h-[27rem] max-w-3xl items-center justify-center sm:min-h-[31rem]">
          <motion.div
            layout
            initial={false}
            animate={{
              y: hasStarted ? 0 : "100vh",
              opacity: hasStarted ? 1 : 0,
              backgroundColor: hasTerminal ? "rgba(17, 19, 16, 0.72)" : "#A8E06C",
              borderRadius: stage === "vertical" ? "1.5rem" : hasTerminal ? "1.25rem" : "9999px",
            }}
            transition={{
              y: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              backgroundColor: { duration: 0.3 },
              borderRadius: { duration: 0.45 },
            }}
            className={`${panelSize} overflow-hidden border border-white/[0.14] shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl`}
          >
            <AnimatePresence initial={false}>
              {hasTerminal ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, delay: stage === "terminal" ? 0.18 : 0 }}
                  className="flex h-20 items-center gap-3 px-5 text-paper sm:px-7"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.07] text-acid">
                    <Terminal className="h-4 w-4" />
                  </div>
                  <p className="mono min-w-0 truncate text-[0.7rem] font-semibold sm:text-sm">
                    <span className="text-acid">$</span> {typedCommand}
                    {!hasResult ? (
                      <motion.span
                        aria-hidden="true"
                        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="ml-0.5 inline-block h-4 w-1.5 bg-paper align-middle"
                      />
                    ) : null}
                  </p>
                  {hasResult ? <Check className="ml-auto h-5 w-5 shrink-0 text-acid" /> : null}
                </motion.div>
              ) : null}
            </AnimatePresence>

            <AnimatePresence>
              {hasResult ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.18 }}
                  className="border-t border-white/[0.12] px-5 py-6 sm:px-7 sm:py-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="mono text-xs font-bold text-acid">~/workspace</p>
                      <p className="mt-2 text-sm text-paper/65">Ferramentas que aparecem no meu dia a dia.</p>
                    </div>
                    <span className="hidden rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-xs font-semibold text-paper/75 sm:block">
                      6 módulos
                    </span>
                  </div>

                  <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {toolkit.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.3 + index * 0.06 }}
                        className="rounded-xl border border-white/[0.12] bg-white/[0.05] p-3.5 sm:p-4"
                      >
                        <span className="mono text-[0.65rem] font-semibold text-paper/45">0{index + 1}</span>
                        <p className="mt-3 text-sm font-semibold text-paper sm:text-base">{item.name}</p>
                        <p className="mt-1 text-xs leading-5 text-paper/50">{item.detail}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
