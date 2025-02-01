import { Project } from "../types/project";
import { ProjectTagType } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "projectsSection.project1.title",
    description: "projectsSection.project1.description",
    images: [
      "/images/project1img1.png",
      "/images/project1img2.png",
      "/images/project1img3.png",
    ],
    tag: ["all", "web"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    date: "projectsSection.project1.date",
    status: "Online",
    demoLink: "aaa", 
    codeLink: "https://github.com/Lucas-Welter/portfolio",
  },
];

export const projectTags: ProjectTagType[] = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];
