import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  technologies?: string[];
  date?: string;
  status?: string;
  hasDemo?: boolean;
}

const ProjectCard = ({
  images = [],
  title,
  description,
  technologies = [],
  date = "2023",
  status = "Completo",
  hasDemo = true
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="bg-card-bg dark:bg-secondary-bg rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-border"
        aria-label={`Projeto: ${title}`}
      >
        <div
          className="h-40 md:h-56 bg-cover bg-center relative bg-light-accent/20"
          style={{ backgroundImage: `url(${images[0] || ''})` }}
        >
          {images.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-secondary-text">
              <PhotoIcon className="h-12 w-12" />
              <span className="sr-only">Imagem não disponível</span>
            </div>
          )}
        </div>

        <div className="p-4 space-y-2">
          <h5 className="text-lg font-semibold text-text dark:text-text">{title}</h5>
          <p className="text-sm text-secondary-text dark:text-secondary-text line-clamp-3 mb-4">
            {description}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            aria-label={`Ver mais sobre o projeto ${title}`}
          >
            Ver Mais
          </button>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        images={images}
        technologies={technologies}
        date={date}
        status={status}
        hasDemo={hasDemo}
      />
    </>
  );
};

export default ProjectCard;