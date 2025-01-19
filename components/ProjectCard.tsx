import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
}) => {
  return (
    <div className="bg-card-bg-color rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div
        className="h-52 md:h-72 bg-center bg-cover"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="p-6">
        <h5 className="text-xl font-bold text-text mb-2">{title}</h5>
        <p className="text-sm text-secondary-text leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href="/"
            className="p-3 bg-primary rounded-full hover:bg-secondary focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            <EyeIcon className="h-5 w-5 text-white" />
          </Link>
          <Link
            href="/"
            className="p-3 bg-primary rounded-full hover:bg-secondary focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            <CodeBracketIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
    </div>

  );
};

export default ProjectCard;
