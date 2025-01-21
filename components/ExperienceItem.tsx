import React from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  date,
  description,
}) => {
  return (
    <div className="bg-card-bg dark:bg-secondary-bg text-text dark:text-secondary-text rounded-lg shadow-md p-8 hover:shadow-lg hover:translate-y-[-6px] transition-all duration-300">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg text-primary dark:text-secondary mb-1">{company}</p>
      <p className="text-sm text-secondary-text dark:text-text mb-1">{location}</p>
      <p className="text-sm text-secondary-text dark:text-text mb-4">{date}</p>
      <ul className="list-disc list-inside text-secondary-text dark:text-text leading-relaxed space-y-2">
        {description.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
