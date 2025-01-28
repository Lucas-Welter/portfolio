import React, { useState } from "react";
import { motion } from "framer-motion";
import { modalVariants } from "../utils/animations";
import { XMarkIcon, EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import ImageGallery from "./ImageGallery";

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
  date = "2023",
  status = "Completo",
  hasDemo = true,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      {...modalVariants}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-label={`Modal do projeto ${title}`}
    >
      <motion.div
        {...modalVariants}
        className="relative bg-card-bg dark:bg-card-bg rounded-xl p-8 max-w-6xl w-full mx-4 border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
          aria-label="Fechar modal"
        >
          <XMarkIcon className="h-6 w-6 text-text" />
        </button>
        <div className="grid md:grid-cols-2 gap-8">
          <ImageGallery
            images={images}
            currentIndex={currentImageIndex}
            onNext={handleNext}
            onPrev={handlePrev}
          />
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-text">{title}</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="text-sm font-semibold text-secondary-text">Data</p>
                  <p className="text-lg text-text">{date}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary-text">Status</p>
                  <p className="text-lg text-text">{status}</p>
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <p className="text-sm font-semibold text-secondary-text">Tecnologias</p>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-secondary-text mb-3">Descrição</p>
                <p className="text-text leading-relaxed">{description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-8">
              {hasDemo ? (
                <button
                  className="px-8 py-3 bg-accent text-button-text rounded-xl hover:bg-accent/90 transition-colors flex items-center gap-2"
                  aria-label="Ver demonstração do projeto"
                >
                  <EyeIcon className="h-6 w-6" />
                  Ver Demo
                </button>
              ) : (
                <button
                  className="px-8 py-3 bg-gray-400 text-button-text rounded-xl cursor-not-allowed flex items-center gap-2"
                  aria-label="Demonstração não disponível"
                  disabled
                >
                  <EyeIcon className="h-6 w-6" />
                  Sem Demo
                </button>
              )}
              <button
                className="px-8 py-3 bg-soft-blue text-button-text rounded-xl hover:bg-soft-blue/90 transition-colors flex items-center gap-2"
                aria-label="Ver código do projeto"
              >
                <CodeBracketIcon className="h-6 w-6" />
                Ver Código
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
