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
    ? "bg-gradient-to-r from-purple-500 to-yellow-400 text-white"
    : "bg-gray-800 text-[#ADB7BE] hover:bg-gray-700 hover:text-white";

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
