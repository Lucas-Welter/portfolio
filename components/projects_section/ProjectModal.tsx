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
  hasDemo?: boolean;
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
  hasDemo = true,
}) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Fecha modal ao pressionar ESC, ou navega entre imagens com setas
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
            className="relative bg-card-bg dark:bg-card-bg rounded-xl p-6 md:p-8 max-w-6xl w-full mx-4 border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label={t("projectsSection.closeModal")}
            >
              <XMarkIcon className="h-6 w-6 text-text" />
            </button>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <ImageGallery
                title={title}
                images={images}
                currentIndex={currentImageIndex}
                onNext={handleNext}
                onPrev={handlePrev}
              />

              <div className="space-y-6 md:space-y-8">
                <h3
                  id="modal-title"
                  className="text-2xl md:text-3xl font-bold text-text"
                >
                  {title}
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-secondary-text">
                        {t("projectsSection.date")}
                      </p>
                      <p className="text-base md:text-lg text-text">
                        {date || t("projectsSection.defaultDate")}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-secondary-text">
                        {t("projectsSection.status")}
                      </p>
                      <p className="text-base md:text-lg text-text">
                        {status || t("projectsSection.defaultStatus")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    <p className="text-xs md:text-sm font-semibold text-secondary-text">
                      {t("projectsSection.technologies")}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm md:text-base bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs md:text-sm font-semibold text-secondary-text mb-2">
                      {t("projectsSection.description")}
                    </p>
                    <p
                      id="modal-description"
                      className="text-text leading-relaxed text-justify"
                    >
                      {description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                  {hasDemo ? (
                    <button
                      className="px-6 py-2 md:px-8 md:py-3 bg-accent text-button-text rounded-xl hover:bg-accent/90 transition-colors flex items-center gap-2"
                      aria-label={t("projectsSection.viewDemo")}
                    >
                      <EyeIcon className="h-5 w-5 md:h-6 md:w-6" />
                      {t("projectsSection.demoButton")}
                    </button>
                  ) : (
                    <button
                      className="px-6 py-2 md:px-8 md:py-3 bg-gray-400 text-button-text rounded-xl cursor-not-allowed flex items-center gap-2"
                      aria-label={t("projectsSection.demoUnavailable")}
                      disabled
                    >
                      <EyeIcon className="h-5 w-5 md:h-6 md:w-6" />
                      {t("projectsSection.noDemoButton")}
                    </button>
                  )}

                  <button
                    className="px-6 py-2 md:px-8 md:py-3 bg-soft-blue text-button-text rounded-xl hover:bg-soft-blue/90 transition-colors flex items-center gap-2"
                    aria-label={t("projectsSection.viewCode")}
                  >
                    <CodeBracketIcon className="h-5 w-5 md:h-6 md:w-6" />
                    {t("projectsSection.codeButton")}
                  </button>
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
