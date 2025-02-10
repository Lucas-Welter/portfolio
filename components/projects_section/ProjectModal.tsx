import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { overlayVariants, modalVariants } from "../../utils/animations";
import { XMarkIcon, EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import ImageGallery from "./ImageGallery";
import { useTranslation } from "next-i18next";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  technologies?: string[];
  date?: string;
  status?: string;
  demoLink?: string;
  codeLink?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  images = [],
  technologies = [],
  date,
  status,
  demoLink,
  codeLink,
}) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNavigate = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [onClose, handlePrev, handleNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-[calc(10vh-5rem)] lg:items-center lg:pt-0 bg-black/50 backdrop-blur-sm"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            key="modal"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative bg-card-bg dark:bg-background rounded-xl p-1 md:p-8 max-w-6xl w-full mx-4 mt-[calc(10vh+1rem)] lg:mt-0 border border-border max-h-[calc(100vh-1rem)] lg:max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky mobile header */}
            <div className="sticky top-[-5px] mb-4 z-50 bg-secondary-bg dark:bg-secondary-bg p-2 flex items-center justify-between md:hidden">
              <h3 id="modal-title" className="text-2xl font-bold text-primary">
                {t(title)}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-primary/10"
                aria-label={t("projectsSection.closeModal")}
              >
                <XMarkIcon className="h-6 w-6 md:max-lg:h-8 md:max-lg:w-8 text-text" />
              </button>
            </div>

            {/* Close button for desktop */}
            <button
              onClick={onClose}
              className="hidden md:block absolute top-4 right-4 sm:p-2 z-10 rounded-full hover:bg-primary/10"
              aria-label={t("projectsSection.closeModal")}
            >
              <XMarkIcon className="h-6 w-6 md:max-lg:h-8 md:max-lg:w-8 text-text" />
            </button>

            {/* Main layout container */}
            <div className="md:grid md:grid-cols-2 md:gap-10 mb-24 sm:mb-0 items-start">
              {/* Desktop: Image gallery in its own column */}
              <div className="hidden md:block">
                <ImageGallery
                  title={t(title)}
                  images={images}
                  currentIndex={currentImageIndex}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  onNavigate={handleNavigate}
                />
              </div>

              {/* Right column: text content */}
              <div className="flex flex-col space-y-6 md:space-y-8 mx-2">
                {/* Desktop header */}
                <div>
                  <h3
                    id="modal-title"
                    className="hidden md:block text-2xl md:text-[28px] font-bold text-primary mb-4"
                  >
                    {t(title)}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <p className="text-xs md:text-lg lg:text-base  font-semibold text-secondary-text">
                        {t("projectsSection.date")}
                      </p>
                      <p className="text-base  md:text-lg lg:text-base text-text">
                        {date ? t(date) : t("projectsSection.defaultDate")}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-lg lg:text-base font-semibold text-secondary-text">
                        {t("projectsSection.status")}
                      </p>
                      <p className="text-base  md:text-lg lg:text-base text-text">
                        {status || t("projectsSection.defaultStatus")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile: Render the image gallery below the header */}
                <div className="md:hidden">
                  <ImageGallery
                    title={t(title)}
                    images={images}
                    currentIndex={currentImageIndex}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    onNavigate={handleNavigate}
                  />
                </div>

                {/* Body: Technologies and Description */}
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-4">
                    <p className="text-xs md:text-lg lg:text-base font-medium text-secondary-text tracking-wide">
                      {t("projectsSection.technologies")}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 font-bold text-md md:max-lg:text-lg bg-tech-bg hover:bg-tech-hover-bg text-primary rounded-lg backdrop-blur-sm transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="prose dark:prose-invert">
                    <p className="text-base  md:max-lg:text-lg leading-relaxed text-justify">
                      {t(description)}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-row gap-4 md:gap-6  md:max-lg:text-lg justify-start">
                  {demoLink ? (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-accent hover:bg-orange-400 dark:hover:bg-blue-500 text-white rounded-lg transition-all flex items-center gap-2 group"
                      aria-label={t("projectsSection.viewDemo")}
                    >
                      <EyeIcon className="h-8 w-8 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
                      {t("projectsSection.demoButton")}
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-2.5 bg-disabled-bg text-disabled-text rounded-lg cursor-not-allowed flex items-center gap-2"
                      aria-label={t("projectsSection.demoUnavailable")}
                    >
                      <EyeIcon className="h-8 w-8 lg:h-5 lg:w-5" />
                      {t("projectsSection.noDemoButton")}
                    </button>
                  )}

                  {codeLink ? (
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-primary hover:bg-secondary dark:bg-button-bg dark:hover:bg-button-hover text-white rounded-lg transition-all flex items-center gap-2 group"
                      aria-label={t("projectsSection.viewCode")}
                    >
                      <CodeBracketIcon className="h-8 w-8 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
                      {t("projectsSection.codeButton")}
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-2.5 bg-disabled-bg text-disabled-text rounded-lg cursor-not-allowed flex items-center gap-2"
                      aria-label={t("projectsSection.viewCode")}
                    >
                      <CodeBracketIcon className="h-8 w-8 lg:h-5 lg:w-5" />
                      {t("projectsSection.privateCodeButton")}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(ProjectModal);
