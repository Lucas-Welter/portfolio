import React, { useState, useCallback } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import ProjectModal from "./ProjectModal";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface ProjectCardProps {
  id: number;
  images?: string[];
  title: string;
  description: string;
  technologies?: string[];
  date?: string;
  status?: string;
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard = ({
  id,
  images = [],
  title,
  description,
  technologies = [],
  date = "2023",
  status = "Completo",
  demoLink,
  codeLink,
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
        aria-labelledby={`project-${id}-title`}
      >
        <figure className="relative h-40 md:h-56 overflow-hidden">
          {images.length > 0 ? (
            <Image
              src={images[0]}
              alt={
                t("projectsSection.projectImageAlt", { title: t(title) })
                || t(title) 
              }
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-300 ${imageLoading ? "opacity-0" : "opacity-100"
                }`}
              loading="lazy"
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-secondary-text">
              <PhotoIcon className="h-12 w-12"/>
              <span className="sr-only">
                {t("projectsSection.noImageAvailable")}
              </span>
            </div>
          )}
        </figure>

        <div className="p-4 space-y-2">
          <h3
            id={`project-${id}-title`}
            className="text-lg font-semibold text-text line-clamp-1"
          >
            {t(title)}
          </h3>
          <p className="text-sm text-secondary-text line-clamp-2 mb-4 min-h-[40px]">
            {t(description)}
          </p>
          <button
            onClick={handleOpenModal}
            className="w-full py-1 px-4 bg-tech-bg text-primary rounded-lg hover:bg-tech-hover-bg transition-colors font-medium"
            aria-label={t("projectsSection.viewProjectDetails", {
              title: t(title),
            })}
          >
            {t("projectsSection.viewDetails")}
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
        demoLink={demoLink} 
        codeLink={codeLink} 
      />
    </>
  );
};

export default React.memo(ProjectCard);
