import React from "react";
import { useTranslation } from "react-i18next";
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
    <section className="bg-gradient-to-b from-gradient-bg-color via-secondary-bg-color to-gradient-bg-color py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12">
        {t("experienceSection.heading")}
      </h2>
      <div className="relative flex flex-col items-center space-y-16 sm:space-y-12">
        {/* Central Line */}
        <div className="absolute w-1 h-full bg-gradient-to-b from-primary to-secondary left-1/2 transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } items-center`}
          >
            {/* Connector */}
            <div
              className={`absolute w-5 h-5 bg-primary rounded-full shadow-md ${
                index % 2 === 0 ? "left-[48%]" : "right-[48%]"
              }`}
            ></div>
            {/* Experience Card */}
            <div
              className={`${
                index % 2 === 0 ? "ml-8" : "mr-8"
              } relative w-[90%] md:w-[45%]`}
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
