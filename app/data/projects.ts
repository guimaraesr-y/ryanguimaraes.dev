import type { Project } from "../types";

export const projects: Project[] = [
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
