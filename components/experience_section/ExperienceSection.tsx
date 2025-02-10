import React from "react";
import { useTranslation } from 'next-i18next';
import ExperienceItem from "./ExperienceItem";

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const experiences = t("experienceSection.experiences", {
    returnObjects: true,
  }) as Array<{
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
  }>;

  return (
    <section
      id="experiences-section"
      className="bg-background dark:bg-secondary-bg text-text dark:bg-bg-color dark:text-text py-24 px-4 md:px-8 transition-colors"
    >
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        {t("experienceSection.heading")}
      </h2>
      <div className="relative flex flex-col items-center space-y-16 sm:space-y-12">
        {/* Central Line */}
        <div className="absolute w-1 h-full bg-gradient-to-b from-primary to-secondary left-1/2 transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex w-full items-center justify-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
              }`}
          >
            {/* Connector dot */}
            <div
              className={`absolute w-5 h-5 bg-primary dark:bg-soft-blue rounded-full shadow-md transform -translate-x-1/2 ${index % 2 === 0
                  ? "lg:left-1/2 lg:translate-x-[-150%]"
                  : "lg:left-1/2 lg:translate-x-[50%]"
                }`}
            ></div>

            {/* Experience Card */}
            <div
              className={`relative w-[100%] lg:w-[45%] ${index % 2 === 0 ? "lg:ml-8" : "lg:mr-8"
                }`}
            >
              <ExperienceItem {...exp} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
