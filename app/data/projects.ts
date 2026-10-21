import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "artifact-studio",
    title: "Artifact Studio",
    description:
      "Camada de publicação que transforma Markdown em páginas duráveis e permite que agentes de IA criem, encontrem e atualizem o mesmo link via MCP.",
    technologies: ["Next.js", "Markdown", "MCP", "Agentes de IA"],
    image: "/projects/artifact-studio.svg",
    eyebrow: "Produto / AI publishing",
    metric: "Markdown + MCP",
    featured: true,
    liveUrl: "https://md.ryanguimaraes.dev/",
  },
  {
    id: "roccart",
    title: "Cia RocCart",
    description:
      "Do público à portaria: plataforma para uma companhia de teatro com reservas por sessão, seleção de assentos e QR Code. Operou duas sessões do espetáculo Jardim do Inimigo, com os 224 lugares da primeira sessão esgotados e check-in individual no painel administrativo.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    gallery: [
      { src: "/projects/roccart/reservas-desktop.png", alt: "Reservas do espetáculo Jardim do Inimigo, com disponibilidade por sessão" },
      { src: "/projects/roccart/painel-admin.png", alt: "Painel da Cia RocCart com ocupação, entradas e mapa de assentos" },
      { src: "/projects/roccart/reservas-mobile.png", alt: "Página de reservas da Cia RocCart no celular" },
    ],
    eyebrow: "Projeto / Cultura e eventos",
    metric: "2 sessões · 224 lugares esgotados na primeira",
    featured: true,
  },
  {
    id: "mindyourevent",
    title: "MindYourEvent",
    description:
      "Plataforma de agendamento inteligente com cruzamento automático de disponibilidades. Clean Architecture com Next.js e PostgreSQL.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Vitest"],
    image: "/projects/mindyourevent.svg",
    eyebrow: "Produto / Scheduling",
    metric: "Clean Architecture",
    featured: true,
    githubUrl: "https://github.com/guimaraesr-y/mind-your-event",
    liveUrl: "https://mindyourevent.vercel.app/",
  },
  {
    id: "socialties-api",
    title: "Socialties API",
    description:
      "API RESTful completa para rede social com usuários, publicações, curtidas, comentários e sistema de seguidores.",
    technologies: ["Java", "Spring Boot", "RESTful", "MySQL"],
    image: "/projects/socialties.svg",
    eyebrow: "Backend / Social graph",
    metric: "API REST completa",
    featured: true,
    githubUrl: "https://github.com/guimaraesr-y/api-socialties",
  },
  {
    id: "gdrive-folder-watcher",
    title: "Google Drive Folder Watcher",
    description:
      "Sistema de polling para pasta do Google Drive que envia arquivos novos por email automaticamente.",
    technologies: ["Python", "Google Cloud Platform", "GCP"],
    githubUrl: "https://github.com/guimaraesr-y/gdrive-folder-watcher",
  },
  {
    id: "lb-docker-nginx",
    title: "Load Balancer Docker Nginx",
    description:
      "Load balancer round-robin com Nginx e Docker Compose para balanceamento de servidores Python.",
    technologies: ["Python", "Nginx", "Docker", "Docker Compose"],
    githubUrl: "https://github.com/guimaraesr-y/lb-docker-nginx",
  },
  {
    id: "ondaspesquisa",
    title: "OndasPesquisa - ETL Pipeline",
    description:
      "Pipeline ETL em Node.js que otimiza consulta de 100k+ registros de Google Sheets para 173ms.",
    technologies: ["Node.js", "Next.js", "PostgreSQL", "Docker Compose"],
    image: "/projects/ondas-pipeline.svg",
    eyebrow: "Dados / Performance",
    metric: "30 min → 173 ms",
    featured: true,
  },
  {
    id: "cpu-emulator",
    title: "CPU Emulator",
    description:
      "Emulador de CPU e assembler escrito em C, com instruções personalizadas e memória simulada.",
    technologies: ["C", "Emulator", "Assembler"],
    githubUrl: "https://github.com/guimaraesr-y/cpu-emulator",
  },
];
