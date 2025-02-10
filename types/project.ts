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

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
    }
  }
}