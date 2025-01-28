import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import AnimatedProjectCard from "./AnimatedProjectCard";
import ProjectTag from "./ProjectTag";
import { projectsData, projectTags } from "../../data/projectData";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [tag, setTag] = useState("all");

  const filteredProjects = useMemo(
    () => projectsData.filter((project) => project.tag.includes(tag)),
    [tag]
  );

  return (
    <section
      id="projects-section"
      className="bg-secondary-bg text-text dark:bg-background dark:text-secondary-text py-16 px-8"
    >
      <h2 className="text-center text-4xl font-bold text-primary mb-12">
        {t("projectsSection.heading")}
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 mb-12">
        {projectTags.map((tab) => (
          <ProjectTag
            key={tab.id}
            name={t(`projectsSection.tags.${tab.id}`) || tab.label}
            onClick={() => setTag(tab.id)}
            isSelected={tag === tab.id}
          />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="text-center text-secondary-text mt-16">
          {t("projectsSection.noProjects")}
        </p>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <AnimatedProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;