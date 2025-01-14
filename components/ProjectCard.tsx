import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group">
      <div
        className="h-52 md:h-72 bg-center bg-cover"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="p-6">
        <h5 className="text-xl font-bold text-white mb-2">{title}</h5>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href="/"
            className="p-3 bg-gray-700 rounded-full hover:bg-purple-500 transition-all duration-300"
          >
            <EyeIcon className="h-5 w-5 text-white" />
          </Link>
          <Link
            href="/"
            className="p-3 bg-gray-700 rounded-full hover:bg-yellow-400 transition-all duration-300"
          >
            <CodeBracketIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
