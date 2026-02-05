
export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubLink: string;
  demoLink: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}
