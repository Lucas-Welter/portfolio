export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tag: string[];
  technologies?: string[];
  date?: string;
  status?: string;
  demoLink?: string;
  codeLink?: string;
}

export interface ProjectTagType {
    id: string;
    label: string;
  }
  