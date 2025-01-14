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
    <div className="bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-lg text-yellow-400 mb-1">{company}</p>
      <p className="text-sm text-gray-400 mb-1">{location}</p>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ExperienceItem;
