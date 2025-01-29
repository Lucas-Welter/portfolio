import { Project } from "../types/project";
import { ProjectTagType } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Website de Portfólio em React",
    description: "Um portfólio em React responsivo com recursos interativos.",
    images: [
      "/images/project1img1.png",
      "/images/project1img2.png",
      "/images/project1img3.png",
    ],
    tag: ["all", "web"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    date: "Dez 2023",
    status: "Online",
    hasDemo: false,
  },
];

export const projectTags: ProjectTagType[] = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];