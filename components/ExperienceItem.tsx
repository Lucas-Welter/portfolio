import React from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  date,
  description,
}) => {
  return (
    <div className="bg-secondary rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-text mb-2">{title}</h3>
      <p className="text-lg text-primary mb-1">{company}</p>
      <p className="text-sm text-secondary mb-1">{location}</p>
      <p className="text-sm text-secondary mb-4">{date}</p>
      <p className="text-text">{description}</p>
    </div>
  );
};

export default ExperienceItem;
