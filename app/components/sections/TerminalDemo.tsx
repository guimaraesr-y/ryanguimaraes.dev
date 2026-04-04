"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

type Phase = "idle" | "config" | "build" | "running" | "live";

interface TerminalLine {
  text: string;
  type: "command" | "output" | "success" | "error" | "info";
}

const fakeResponses: Record<string, TerminalLine[]> = {
  "docker ps": [
    { text: "CONTAINER ID   IMAGE          STATUS      PORTS                    NAMES", type: "output" },
    { text: "a1b2c3d4e5f   myapp:latest   Up 2 hours  0.0.0.0:3000->3000/tcp   web", type: "output" },
    { text: "f6e7d8c9b0a   postgres:15    Up 2 hours  0.0.0.0:5432->5432/tcp   db", type: "output" },
  ],
  "docker-compose ps": [
    { text: "NAME        IMAGE         COMMAND              SERVICE    CREATED   STATUS", type: "output" },
    { text: "web-1      myapp:latest  \"npm start\"         web        2 hours   Up", type: "output" },
    { text: "db-1       postgres:15   \"docker-entrypoint.sh\"  db        2 hours   Up", type: "output" },
  ],
  "docker-compose up -d --build": [
    { text: "[+] Building 15.3s", type: "info" },
    { text: "[+] Building web", type: "info" },
    { text: "[+] Building web    Done   15.3s", type: "success" },
    { text: "[+] Running 2/2", type: "info" },
    { text: " ✓ web  Pulled", type: "success" },
    { text: " ✓ web  Started", type: "success" },
    { text: " ✓ db   Pulled", type: "success" },
    { text: " ✓ db   Started", type: "success" },
  ],
  "docker images": [
    { text: "REPOSITORY      TAG       IMAGE ID       CREATED       SIZE", type: "output" },
    { text: "myapp           latest    a1b2c3d4e5f6   2 hours ago   245MB", type: "output" },
    { text: "postgres        15        f6e7d8c9b0a1   3 weeks ago   379MB", type: "output" },
    { text: "nginx           latest    a1b2c3d4e5f6   4 weeks ago   187MB", type: "output" },
  ],
  "docker --version": [
    { text: "Docker version 24.0.7, build afdd53b", type: "output" },
  ],
  "docker-compose --version": [
    { text: "Docker Compose version v2.21.0", type: "output" },
  ],
  "ls": [
    { text: "docker-compose.yml  Dockerfile  package.json  node_modules  src  app  public", type: "output" },
  ],
  "ls -la": [
    { text: "total 52", type: "output" },
    { text: "drwxr-xr-x  20 user  staff   640 Apr  4 12:00 .", type: "output" },
    { text: "drwxr-xr-x   5 user  staff   160 Apr  4 12:00 ..", type: "output" },
    { text: "-rw-r--r--   1 user  staff  1024 Apr  4 12:00 docker-compose.yml", type: "output" },
    { text: "-rw-rr--r--   1 user  staff  256 Apr  4 12:00 Dockerfile", type: "output" },
    { text: "-rw-rr--r--   1 user  staff  2048 Apr  4 12:00 package.json", type: "output" },
    { text: "drwxr-xr-x  20 user  staff   640 Apr  4 12:00 node_modules", type: "output" },
  ],
  "pwd": [
    { text: "/home/developer/myapp", type: "output" },
  ],
  "cd": [
    { text: "/home/developer/myapp", type: "output" },
  ],
  "cd ..": [
    { text: "/home/developer", type: "output" },
  ],
  "cd ~": [
    { text: "/home/developer", type: "output" },
  ],
  "whoami": [
    { text: "developer", type: "output" },
  ],
  "uname -a": [
    { text: "Linux devbox 5.15.0-generic #1 SMP x86_64 GNU/Linux", type: "output" },
  ],
  "node --version": [
    { text: "v20.10.0", type: "output" },
  ],
  "npm --version": [
    { text: "10.2.3", type: "output" },
  ],
  "python --version": [
    { text: "Python 3.11.5", type: "output" },
  ],
  "git --version": [
    { text: "git version 2.42.0", type: "output" },
  ],
  "help": [
    { text: "Comandos disponíveis:", type: "output" },
    { text: "  docker ps          - Lista containers ativos", type: "output" },
    { text: "  docker-compose ps  - Lista serviços do compose", type: "output" },
    { text: "  docker images      - Lista imagens", type: "output" },
    { text: "  docker --version   - Versão do Docker", type: "output" },
    { text: "  docker-compose up  - Inicia os serviços", type: "output" },
    { text: "  ls / ls -la        - Lista arquivos", type: "output" },
    { text: "  pwd                - Mostra diretório atual", type: "output" },
    { text: "  cd / cd .. / cd ~  - Navega entre diretórios", type: "output" },
    { text: "  whoami             - Usuário atual", type: "output" },
    { text: "  node --version     - Versão do Node.js", type: "output" },
    { text: "  npm --version      - Versão do npm", type: "output" },
    { text: "  python --version   - Versão do Python", type: "output" },
    { text: "  git --version      - Versão do Git", type: "output" },
    { text: "  clear              - Limpa o terminal", type: "output" },
    { text: "  help               - Mostra esta ajuda", type: "output" },
  ],
  "clear": [],
};

export function TerminalDemo() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [commandInput, setCommandInput] = useState("");
  const [showEasterEggPrompt, setShowEasterEggPrompt] = useState(false);
  const [showHackMode, setShowHackMode] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const startDeploy = useCallback(async () => {
    if (phase !== "idle") return;
    setPhase("config");
    setDisplayedLines([]);

    const configLines: TerminalLine[] = [
      { text: "$ cat docker-compose.yml", type: "command" },
      { text: "version: '3.8'", type: "output" },
      { text: "services:", type: "output" },
      { text: "  web:", type: "output" },
      { text: "    build: .", type: "output" },
      { text: "    ports:", type: "output" },
      { text: '      - "3000:3000"', type: "output" },
      { text: "    environment:", type: "output" },
      { text: "      - NODE_ENV=production", type: "output" },
    ];

    for (const line of configLines) {
      setDisplayedLines(prev => [...prev, line]);
      await new Promise(r => setTimeout(r, 100 + Math.random() * 150));
    }

    setPhase("build");

    const buildLines: TerminalLine[] = [
      { text: "", type: "output" },
      { text: "$ docker-compose up -d --build", type: "command" },
    ];

    for (const line of buildLines) {
      setDisplayedLines(prev => [...prev, line]);
      await new Promise(r => setTimeout(r, 300));
    }

    const fakeBuild = fakeResponses["docker-compose up -d --build"];
    for (const line of fakeBuild) {
      setDisplayedLines(prev => [...prev, line]);
      await new Promise(r => setTimeout(r, 200 + Math.random() * 300));
    }

    setPhase("running");
    await new Promise(r => setTimeout(r, 1500));
    setPhase("live");
  }, [phase]);

  useEffect(() => {
    if (phase === "live" && !showEasterEggPrompt) {
      const timer = setTimeout(() => setShowEasterEggPrompt(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [phase, showEasterEggPrompt]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && phase === "live" && showEasterEggPrompt && !showHackMode) {
        setShowHackMode(true);
      }
      if (e.key === "q" || e.key === "Q") {
        setShowHackMode(false);
        setShowSecretMessage(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, showEasterEggPrompt, showHackMode]);

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return;

    setDisplayedLines(prev => [...prev, { text: `$ ${cmd}`, type: "command" }]);
    setCommandInput("");

    await new Promise(r => setTimeout(r, 100));

    if (trimmedCmd === "clear") {
      setDisplayedLines([]);
      return;
    }

    let response = fakeResponses[trimmedCmd];

    if (!response) {
      const cmdKey = trimmedCmd.split(" ")[0];
      response = fakeResponses[cmdKey];
    }

    if (response) {
      for (const line of response) {
        setDisplayedLines(prev => [...prev, line]);
        await new Promise(r => setTimeout(r, 30));
      }
    } else {
      setDisplayedLines(prev => [...prev, { text: `bash: ${trimmedCmd.split(" ")[0]}: command not found`, type: "error" }]);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <motion.span
              animate={{
                x: [0, -2, 2, -1, 1, 0],
                opacity: [1, 0.8, 1, 0.9, 1]
              }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              className="text-gradient-animated text-transparent bg-clip-text"
            >
              Terminal Demo
            </motion.span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-black/90 rounded-xl border border-white/10 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-white/50 text-sm font-mono">Terminal</span>
            </div>
            <div
              ref={terminalRef}
              className="p-4 h-80 font-mono text-sm overflow-y-auto"
            >
              {displayedLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`
                    ${line.type === "command" ? "text-cyan-400" : ""}
                    ${line.type === "output" ? "text-white/70" : ""}
                    ${line.type === "success" ? "text-green-400" : ""}
                    ${line.type === "error" ? "text-red-400" : ""}
                    ${line.type === "info" ? "text-yellow-400" : ""}
                    mb-1
                  `}
                >
                  {line.type === "command" && <span className="text-violet-400">➜  </span>}
                  {line.text}
                </motion.div>
              ))}

              {phase === "live" ? (
                <div className="flex items-center mt-2">
                  <span className="text-violet-400 mr-2">➜  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleCommand(commandInput);
                      }
                    }}
                    className="bg-transparent text-white focus:outline-none flex-1"
                    placeholder="Digite um comando..."
                    autoFocus
                  />
                </div>
              ) : (
                <span className="text-green-400 animate-pulse">▋</span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="h-full bg-black/90 rounded-xl border border-white/10 h-80 overflow-hidden relative">
              {phase === "idle" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <p className="text-white/70 text-center mb-6">
                    Simule comandos Docker e shell no terminal interativo
                  </p>
                  <button
                    onClick={startDeploy}
                    className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                  >
                    ▶ docker-compose up -d --build
                  </button>
                </div>
              )}

              {(phase === "config" || phase === "build") && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full mx-auto mb-4"
                  />
                  <p className="text-white/70">
                    {phase === "config" ? "Carregando configuração..." : "Executando Docker..."}
                  </p>
                  {phase === "build" && (
                    <div className="w-full bg-white/10 rounded-full h-2 mt-4 overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-violet-500 to-cyan-500"
                      />
                    </div>
                  )}
                </div>
              )}

              {phase === "running" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="text-6xl mb-4"
                    >
                      🚀
                    </motion.div>
                    <p className="text-white/70">Iniciando aplicação...</p>
                  </div>
                </div>
              )}

              {(phase === "live" || showHackMode || showSecretMessage) && !showHackMode && !showSecretMessage && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-red-900/20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <motion.p
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="text-red-500 font-bold text-lg mb-4"
                    >
                      ⚠️ ACESSO RESTRITO DETECTADO ⚠️
                    </motion.p>
                    <p className="text-white/70 text-sm mb-6">
                      Tentativa de acesso não autorizada
                    </p>
                    <motion.p
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-yellow-400 text-sm"
                    >
                      [PRESSIONE ESC PARA HACKEAR O SISTEMA]
                    </motion.p>
                  </motion.div>
                </div>
              )}

              {showHackMode && !showSecretMessage && (
                <MatrixRain onComplete={() => setShowSecretMessage(true)} />
              )}

              {showSecretMessage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black flex flex-col items-center justify-center p-4"
                >
                  <pre className="text-green-500 text-xs font-mono leading-tight mb-4">
                    {`
╔═══════════════════════════════════════╗
║  ACESSO CONCEDIDO                     ║
║  Bem-vindo ao sistema, dev.           ║
╚═══════════════════════════════════════╝
`}
                  </pre>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-green-400 mb-2">Você encontrou o easter egg! 🎉</p>
                    <p className="text-white/60 text-sm mb-4">
                      Isso prova que você é um desenvolvedor de verdade. 🚀
                    </p>
                    <p className="text-white/40 text-xs">
                      [PRESSIONE Q PARA SAIR]
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MatrixRain({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    let frame = 0;
    const maxFrames = 100;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frame++;
      if (frame < maxFrames) {
        requestAnimationFrame(draw);
      } else {
        onComplete();
      }
    };

    draw();
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
