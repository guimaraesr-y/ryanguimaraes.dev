import type { SkillCategory, Stat, SocialLink } from "../types";

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "Express", icon: "express" },
      { name: "Django", icon: "django" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export const stats: Stat[] = [
  { value: 3, label: "anos resolvendo problemas", suffix: "+" },
  { value: 20, label: "projetos que chegaram ao fim", suffix: "+" },
  { value: 3, label: "certificações que colecionei", suffix: "" },
  { value: 6, label: "ferramentas que uso sempre", suffix: "+" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/guimaraesr-y", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/guimaraesry/", icon: "linkedin" },
];

export const personalInfo = {
  name: "Ryan Guimarães",
  title: "Full-Stack Developer",
  phone: "(21) 9 9657-0056",
  location: "Rio de Janeiro",
  website: "https://ryanguimaraes.dev",
  github: "https://github.com/guimaraesr-y",
  linkedin: "https://www.linkedin.com/in/guimaraesry/",
  bio: `Desenvolvedor Full-Stack com forte domínio em Python, TypeScript, PHP e Java.
Especialista em arquiteturas modernas como Django, Spring Boot e Laravel.
Reconhecido pela comunicação clara e colaboração efetiva.
Versátil em ambientes Windows e Linux, comprometido com soluções escaláveis e de alta qualidade.`,
};

export const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Experiência", href: "#experience" },
  { name: "Stack", href: "#skills" },
  { name: "Contato", href: "#contact" },
];
