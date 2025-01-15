import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-background via-secondary to-background py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-12">
        Experiência Profissional
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        <ExperienceItem
          title="Mobile Developer"
          company="Mega Jr."
          location="Campo Grande - MS, Brasil"
          date="August 2022 - December 2023"
          description="Responsible for developing mobile apps using Flutter, in addition to helping new trainees get acquainted with configuration management and agile methodology."
        />
        <ExperienceItem
          title="Bidding Department Member"
          company="Campo Grande Municipal Council"
          location="Campo Grande - MS, Brasil"
          date="September 2020 - Present"
          description="Participated in the creation and execution of bidding processes. Introduced the Trello platform to improve process management. Generated economic charts for each bidding type."
        />
        {/* Add more ExperienceItems if needed */}
      </div>
    </section>
  );
};

export default ExperienceSection;
