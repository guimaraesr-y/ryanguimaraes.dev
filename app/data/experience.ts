import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "inchurch-jr",
    company: "inChurch",
    role: "Desenvolvedor Back-end Jr.",
    period: "novembro 2025 - Atual",
    description: [
      "Desenvolvimento e manutenção de novas funcionalidades na inChurch",
      "Responsável pela plataforma legada Atos6 em Rails",
      "Migração e unificação de plataformas",
      "Busca ativa de falhas de segurança (XSS, enumeração de endpoints)",
      "Code reviews e suporte aos colegas",
    ],
    technologies: ["Python", "Django", "Ruby on Rails", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    id: "inchurch-interno",
    company: "inChurch",
    role: "Desenvolvedor Back-end (Estágio)",
    period: "outubro 2024 - novembro 2025",
    description: [
      "Monitoramento de erros em produção via Sentry",
      "Integração de funcionalidades de sistemas adquiridos",
      "Mapeamento e documentação de endpoints REST",
      "Escrita de testes unitários e de integração",
      "Code reviews e planejamento de sprints",
    ],
    technologies: ["Python", "Django", "MySQL", "Docker", "CI/CD"],
  },
  {
    id: "ondas-trilhas",
    company: "Ondas e Trilhas",
    role: "Programador Full-Stack",
    period: "maio 2024 - setembro 2024",
    description: [
      "Mapeamento de processos manuais em planilhas Google (+220 abas, +100k itens)",
      "Desenvolvimento de sistema web integrado à Google Sheets API e OAuth",
      "Otimização de performance: 30min → 173ms (99.999% de redução)",
      "Documentação e interface intuitiva para equipes",
    ],
    technologies: ["Next.js", "Google Sheets API", "OAuth 2.0", "Docker", "Node.js"],
  },
  {
    id: "faetec-estagio",
    company: "FAETEC",
    role: "Estágio Técnico em TI",
    period: "maio 2023 - janeiro 2024",
    description: [
      "Desenvolvimento de sistema de gestão de salas e horários",
      "Manutenção de infraestrutura de laboratórios",
      "Suporte técnico a funcionários e estudantes",
      "Condução de workshop de robótica educacional",
    ],
    technologies: ["Windows", "Linux", "PHP", "MySQL"],
  },
];
