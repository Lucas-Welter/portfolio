export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    tag: string[];
    technologies?: string[];
    date?: string;
    status?: string;
    hasDemo?: boolean;
  }

export interface ProjectTagType {
    id: string;
    label: string;
  }
  