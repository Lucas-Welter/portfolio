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
    ? "bg-primary text-white border-primary"
    : "bg-background dark:bg-secondary-bg text-secondary-text hover:bg-primary dark:hover:bg-primary hover:text-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 border ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
