export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  eyebrow?: string;
  metric?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
