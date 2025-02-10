import React from "react";

interface ProjectTagProps {
  id: string;
  name: string;
  onClick: (id: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  id,
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "bg-primary dark:bg-button-bg text-white border-primary"
    : "bg-background dark:bg-secondary-bg text-secondary-text hover:text-white hover:bg-light-accent dark:hover:bg-gray-700 border-border";

  return (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 rounded-full text-lg md:max-lg:text-2xl font-medium transition-all border ${buttonStyles}`}
      aria-pressed={isSelected}
    >
      {name}
    </button>
  );
};

export default React.memo(ProjectTag);
