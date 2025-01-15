import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "bg-gradient-to-r from-primary to-purple-500 text-text"
    : "bg-secondary text-secondary hover:bg-primary hover:text-text";

  return (
    <button
      onClick={() => onClick(name)}
      className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
