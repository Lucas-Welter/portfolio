import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [tag, setTag] = useState("all");

  const projectsData = [
    {
      id: 1,
      title: t("projectsSection.project1.title"),
      description: t("projectsSection.project1.description"),
      image: "/images/project1.jpg",
      tag: ["all", "web"],
    },
    {
      id: 2,
      title: t("projectsSection.project2.title"),
      description: t("projectsSection.project2.description"),
      image: "/images/project2.jpg",
      tag: ["all", "web"],
    },
    {
      id: 3,
      title: t("projectsSection.project3.title"),
      description: t("projectsSection.project3.description"),
      image: "/images/project3.jpg",
      tag: ["all", "web"],
    },
    {
      id: 4,
      title: t("projectsSection.project4.title"),
      description: t("projectsSection.project4.description"),
      image: "/images/project4.jpg",
      tag: ["all", "mobile"],
    },
    {
      id: 5,
      title: t("projectsSection.project5.title"),
      description: t("projectsSection.project5.description"),
      image: "/images/project5.jpg",
      tag: ["all", "web"],
    },
    {
      id: 6,
      title: t("projectsSection.project6.title"),
      description: t("projectsSection.project6.description"),
      image: "/images/project6.jpg",
      tag: ["all", "web"],
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <section
      id="projects-section"
      className="bg-secondary-bg text-text dark:bg-background dark:text-secondary-text py-16 px-8"
    >
      <h2 className="text-center text-4xl font-bold text-primary mb-12">
        {t("projectsSection.heading")}
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 mb-12">
        {[{ id: "all", label: t("projectsSection.tags.all") },
          { id: "web", label: t("projectsSection.tags.web") },
          { id: "mobile", label: t("projectsSection.tags.mobile") },
        ].map((tab) => (
          <ProjectTag
            key={tab.id}
            name={tab.label}
            onClick={() => handleTagChange(tab.id)}
            isSelected={tag === tab.id}
          />
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
