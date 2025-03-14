import { Project } from "../types/project";
import { ProjectTagType } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "projectsSection.project1.title",
    description: "projectsSection.project1.description",
    images: [
      "/images/project1/project1img1.png",
      "/images/project1/project1img2.png",
      "/images/project1/project1img3.png",
      "/images/project1/project1img4.png",
      "/images/project1/project1img5.png",
    ],
    tag: ["all", "web"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    date: "projectsSection.project2.date",
    status: "Online",
    demoLink: "https://lucaswelterdev.com/",
    codeLink: "https://github.com/Lucas-Welter/portfolio",
  },
  {
    id: 2,
    title: "projectsSection.project2.title",
    description: "projectsSection.project2.description",
    images: [
      "/images/project2/project2img1.png",
      "/images/project2/project2img2.png",
      "/images/project2/project2img3.png",
      "/images/project2/project2img4.png",
      "/images/project2/project2img5.png",
    ],
    tag: ["all", "web"],
    technologies: ["Java", "SpringBoot", "MySQL", "RabbitMQ", "Flyway", "Eureka Server", "SpringDoc", "JUnit", "Mockito", "Docker", "Vue.js", "Javascript", "Sass"],
    date: "projectsSection.project2.date",
    status: "Offline",
    demoLink: "https://drive.google.com/file/d/1U1apBjRRKuJfwwO-rxZa6jNvHxaGbKPd/view?usp=sharing",
    codeLink: "https://github.com/Byt3-Social/b3-social",
  },
  {
    id: 3,
    title: "projectsSection.project3.title",
    description: "projectsSection.project3.description",
    images: [
      "/images/project3/project3img1.png",
      "/images/project3/project3img2.png",
      "/images/project3/project3img3.png",
      "/images/project3/project3img4.png",
      "/images/project3/project3img5.png",
    ],
    tag: ["all", "mobile"],
    technologies: ["Dart", "Flutter", "Firebase", "Javascript"],
    date: "projectsSection.project3.date",
    status: "Offline",
    demoLink: "",
    codeLink: "",
  },
  {
    id: 4,
    title: "projectsSection.project4.title",
    description: "projectsSection.project4.description",
    images: [
      "/images/project4/project4img1.png",
      "/images/project4/project4img2.png",
      "/images/project4/project4img3.png",
      "/images/project4/project4img4.png",
      "/images/project4/project4img5.png",
    ],
    tag: ["all", "web"],
    technologies: ["PHP", "Laravel", "Vue.js", "Javascript", "MySQL", "Docker", "Cypress"],
    date: "projectsSection.project4.date",
    status: "Online",
    demoLink: "https://nes.facom.ufms.br/projeto/centro-de-memoria-de-enfermagem-de-mato-grosso-do-sul-memoenf",
    codeLink: "",
  },
  {
    id: 5,
    title: "projectsSection.project5.title",
    description: "projectsSection.project5.description",
    images: [
      "/images/project5/project5img1.png",
      "/images/project5/project5img2.png",
      "/images/project5/project5img3.png",
      "/images/project5/project5img4.png",
      "/images/project5/project5img5.png",
    ],
    tag: ["all", "web"],
    technologies: ["Next.js", "React", "Typescript", "Node.js", "MySQL", "Docker", "Mocha", "Cypress"],
    date: "projectsSection.project5.date",
    status: "Online",
    demoLink: "https://nes.facom.ufms.br/projeto/almoxarifado-aasjb-sua-doacao-faz-diferenca",
    codeLink: "",
  },
];

export const projectTags: ProjectTagType[] = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];
