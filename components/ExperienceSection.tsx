import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Ingens",
      location: "Campo Grande, MS, Brasil",
      date: "Jun 2024 – Out 2024",
      description: `
        • Engineered requirements for product discovery, worked as a developer and acted as Scrum Master.
        • Developed and deployed the back and front end of an A.I camera monitoring system, made for the
        basic health units of Campo Grande - MS.
        • Used technologies such as Typescript, Node.js, Vue.js, Fastify, Prisma and Docker.
      `,
    },
    {
      title: "Mobile Developer",
      company: "Mega Jr.",
      location: "Campo Grande, MS, Brasil",
      date: "August 2022 - December 2023",
      description: `
        Responsible for developing mobile apps using Flutter, in addition to helping new trainees get acquainted with configuration management and agile methodology.
      `,
    },
    {
      title: "Bidding Department Member",
      company: "Campo Grande Municipal Council",
      location: "Campo Grande, MS, Brasil",
      date: "September 2020 - December 2024",
      description: `
        Participated in the creation and execution of bidding processes. Introduced the Trello platform to improve process management. Generated economic charts for each bidding type.
      `,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gradient-bg-color via-secondary-bg-color to-gradient-bg-color py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12">
        Professional Experience
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
