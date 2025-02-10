import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';

const ProjectsSkeleton = () => {
  const { t } = useTranslation();

  return (
    <div
      role="status"
      aria-live="polite"
      className="py-16 px-4 sm:px-8"
    >
      {/* Accessibility loading text */}
      <span className="sr-only">
        {t("projectsSection.loadingProjects")}
      </span>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-1/2 mx-auto" />
        
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-10 bg-gray-200 dark:bg-gray-700 rounded-full w-24"
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSkeleton;
