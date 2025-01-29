import React, { useState, useCallback } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import ProjectModal from "./ProjectModal";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface ProjectCardProps {
  images?: string[];
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
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <article
        className="group bg-card-bg dark:bg-secondary-bg rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-border"
        aria-labelledby={`project-${title}-title`}
      >
        <figure className="relative h-40 md:h-56 bg-light-accent/20 overflow-hidden">
          {images.length > 0 ? (
            <Image
              src={images[0]}
              alt={t('projectsSection.projectImageAlt', { title }) || title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              loading="lazy"
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-secondary-text">
              <PhotoIcon className="h-12 w-12" />
              <span className="sr-only">
                {t('projectsSection.noImageAvailable')}
              </span>
            </div>
          )}
        </figure>

        <div className="p-4 space-y-2">
          <h3 
            id={`project-${title}-title`}
            className="text-lg font-semibold text-text line-clamp-1"
          >
            {title}
          </h3>
          <p className="text-sm text-secondary-text line-clamp-3 mb-4 min-h-[60px]">
            {description}
          </p>
          <button
            onClick={handleOpenModal}
            className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
            aria-label={t('projectsSection.viewProjectDetails', { title })}
          >
            {t('projectsSection.viewMore')}
          </button>
        </div>
      </article>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
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

export default React.memo(ProjectCard);