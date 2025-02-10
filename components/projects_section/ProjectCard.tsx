import React, { useState, useCallback } from "react";
import { ChevronRightIcon, PhotoIcon } from "@heroicons/react/24/outline";
import ProjectModal from "./ProjectModal";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface ProjectCardProps {
  id: number;
  tag?: string[]; 
  images?: string[];
  title: string;
  description: string;
  technologies?: string[];
  date?: string;
  status?: string;
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  tag = [],
  images = [],
  title,
  description,
  technologies = [],
  date = "2023",
  status = "Completo",
  demoLink,
  codeLink,
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  // Check if this project is tagged as mobile
  const isMobileProject = tag.includes("mobile");

  return (
    <>
      {isMobileProject ? (
        // Mobile Layout: image on left, details on right
        <article
          className="group bg-card-bg dark:bg-secondary-bg rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-border flex h-96"
          aria-labelledby={`project-${id}-title`}
        >
          {/* Left side: Image */}
          <figure className="relative w-1/2 h-full overflow-hidden">
            {images.length > 0 ? (
              <Image
                src={images[0]}
                alt={
                  t("projectsSection.projectImageAlt", { title: t(title) }) ||
                  t(title)
                }
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className={`object-contain transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                loading="lazy"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-secondary-text">
                <PhotoIcon className="h-12 w-12" />
                <span className="sr-only">
                  {t("projectsSection.noImageAvailable")}
                </span>
              </div>
            )}
          </figure>

          {/* Right side: Details */}
          <div className="p-4 flex flex-col justify-between w-1/2 h-full">
            <div className="flex flex-col flex-grow space-y-2">
              <h3 className="text-lg md:max-lg:text-2xl font-semibold text-text line-clamp-1">
                {t(title)}
              </h3>
              <p className="text-md md:max-lg:text-lg text-secondary-text line-clamp-10 md:max-lg:line-clamp-9">
                {t(description)}
              </p>
            </div>
            <button
              onClick={handleOpenModal}
              className="w-full flex items-center justify-center py-2 px-4 md:max-lg:text-lg text-primary transition-transform hover:scale-105 font-medium"
              aria-label={t("projectsSection.viewProjectDetails", {
                title: t(title),
              })}
            >
              <span>{t("projectsSection.viewDetails")}</span>
              <ChevronRightIcon className="h-5 w-5 md:max-lg:h-8 md:max-lg:w-8 ml-2" />
            </button>
          </div>
        </article>
      ) : (
        // Web Layout: image on top, details below
        <article
          className="group bg-card-bg dark:bg-secondary-bg rounded-xl md:max-lg:text-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-border"
          aria-labelledby={`project-${id}-title`}
        >
          <figure className="relative h-40 md:h-56 overflow-hidden">
            {images.length > 0 ? (
              <Image
                src={images[0]}
                alt={
                  t("projectsSection.projectImageAlt", { title: t(title) }) ||
                  t(title)
                }
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                loading="lazy"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-secondary-text">
                <PhotoIcon className="h-12 w-12" />
                <span className="sr-only">
                  {t("projectsSection.noImageAvailable")}
                </span>
              </div>
            )}
          </figure>

          <div className="p-4 space-y-2">
            <h3
              id={`project-${id}-title`}
              className="text-lg  md:max-lg:text-2xl font-semibold text-text line-clamp-1"
            >
              {t(title)}
            </h3>
            <p className="text-md text-secondary-text line-clamp-2 text-justify mb-4 min-h-[40px]">
              {t(description)}
            </p>
            <button
              onClick={handleOpenModal}
              className="w-full flex items-center justify-center py-2 px-4 text-primary transition-transform hover:scale-105 font-medium"
              aria-label={t("projectsSection.viewProjectDetails", {
                title: t(title),
              })}
            >
              <span>{t("projectsSection.viewDetails")}</span>
              <ChevronRightIcon className="h-5 w-5 md:max-lg:h-6 md:max-lg:w-6 ml-2" />
            </button>
          </div>
        </article>
      )}

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
