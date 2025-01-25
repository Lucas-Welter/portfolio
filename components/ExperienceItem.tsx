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
    <div className="bg-background text-text dark:bg-secondary-bg dark:text-secondary-text rounded-lg shadow-lg hover:shadow-xl border border-border dark:border-border p-8 hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg font-bold text-primary dark:text-secondary mb-1">{company}</p>
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
