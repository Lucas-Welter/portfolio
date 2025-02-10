import React, { useState, useMemo } from "react";
import { useTranslation } from 'next-i18next';
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import AnimatedProjectCard from "./AnimatedProjectCard";
import ProjectTag from "./ProjectTag";
import { projectsData, projectTags } from "../../data/projectData";
import ProjectsSkeleton from "./ProjectSkeleton";
import { Project } from "@/types/project";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Projects: React.FC = () => {
  const { t, ready } = useTranslation();
  const [tag, setTag] = useState("all");

  const filteredProjects = useMemo(
    () => projectsData.filter((project) => project.tag.includes(tag)),
    [tag]
  );

  if (!ready) {
    return <ProjectsSkeleton />;
  }

  return (
    <section
      id="projects-section"
      className="bg-secondary-bg text-text dark:bg-background dark:text-secondary-text py-16 px-4 sm:px-8 transition-colors"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-center text-3xl sm:text-4xl font-bold text-primary mb-8 sm:mb-12"
      >
        {t("projectsSection.heading")}
      </h2>

      <LayoutGroup>
        <div
          aria-label={t("projectsSection.filterProjects")}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {projectTags.map((tab) => (
            <ProjectTag
              key={tab.id}
              id={tab.id}
              name={t(`projectsSection.tags.${tab.id}`)}
              onClick={setTag}
              isSelected={tag === tab.id}
            />
          ))}
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-secondary-text md:max-lg:text-xl col-span-full py-8"
              >
                {t("projectsSection.noProjects")}
              </motion.p>
            ) : (
              filteredProjects.map((project: Project) => (
                <AnimatedProjectCard key={project.id} {...project} />
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
};

export default React.memo(Projects);
