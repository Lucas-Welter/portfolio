import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { overlayVariants, modalVariants } from "../../utils/animations";
import { XMarkIcon, EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import ImageGallery from "./ImageGallery";
import { useTranslation } from "react-i18next";

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
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
            className="relative bg-card-bg dark:bg-background rounded-xl p-5 md:p-8 max-w-6xl w-full mx-4 border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label={t("projectsSection.closeModal")}
            >
              <XMarkIcon className="h-6 w-6 text-text" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            <ImageGallery
                title={t(title)}
                images={images}
                currentIndex={currentImageIndex}
                onNext={handleNext}
                onPrev={handlePrev}
                onNavigate={handleNavigate}
              />

              <div className="space-y-6 md:space-y-8 mx-2">
                <h3
                  id="modal-title"
                  className="text-2xl md:text-[28px] font-bold text-primary mb-4"
                >
                  {t(title)}
                </h3>

                <div className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <p className="text-xs md:text-base font-semibold text-secondary-text">
                        {t("projectsSection.date")}
                      </p>
                      <p className="text-base md:text-base text-text">
                        {date ? t(date) : t("projectsSection.defaultDate")}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-base font-semibold text-secondary-text">
                        {t("projectsSection.status")}
                      </p>
                      <p className="text-base md:text-base text-text">
                        {status || t("projectsSection.defaultStatus")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs md:text-base font-medium text-secondary-text tracking-wide">
                      {t("projectsSection.technologies")}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 font-bold text-md bg-tech-bg hover:bg-tech-hover-bg text-primary rounded-lg backdrop-blur-sm transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="prose dark:prose-invert">
                    <p className="text-base md:text-base leading-relaxed text-justify">
                      {t(description)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6 justify-start">
                  {demoLink ? (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-accent hover:bg-orange-400 dark:hover:bg-blue-500 text-white rounded-lg transition-all flex items-center gap-2 group"
                      aria-label={t("projectsSection.viewDemo")}
                    >
                      <EyeIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      {t("projectsSection.demoButton")}
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-2.5 bg-disabled-bg text-disabled-text rounded-lg cursor-not-allowed flex items-center gap-2"
                      aria-label={t("projectsSection.demoUnavailable")}
                    >
                      <EyeIcon className="h-5 w-5" />
                      {t("projectsSection.noDemoButton")}
                    </button>
                  )}

                  {codeLink ? (
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-primary hover:bg-secondary text-white rounded-lg transition-all flex items-center gap-2 group"
                      aria-label={t("projectsSection.viewCode")}
                    >
                      <CodeBracketIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      {t("projectsSection.codeButton")}
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-2.5 bg-disabled-bg text-disabled-text rounded-lg cursor-not-allowed flex items-center gap-2"
                      aria-label={t("projectsSection.viewCode")}
                    >
                      <CodeBracketIcon className="h-5 w-5" />
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