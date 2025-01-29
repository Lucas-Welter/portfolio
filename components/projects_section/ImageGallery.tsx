import React from "react";
import Image from "next/image"; 
import { ChevronLeftIcon, ChevronRightIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images,
  currentIndex,
  onNext,
  onPrev,
  title
}) => {
  const { t } = useTranslation();

  if (images.length === 0) {
    return (
      <div className="h-[400px] relative bg-light-accent/20 rounded-xl border border-border flex items-center justify-center">
        <div className="flex flex-col items-center text-secondary-text">
          <PhotoIcon className="h-12 w-12 mb-2" />
          <p>{t('projectsSection.noImages')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Galeria de imagens */}
      <div className="h-[400px] relative bg-light-accent/20 rounded-xl border border-border overflow-hidden flex items-center justify-center">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt={t('projectsSection.imageAlt', { title, number: index + 1 })}
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain' }}
              loading="lazy"
              onError={() => {
              }}
            />
          </div>
        ))}
      </div>

      {/* Controles de navegação */}
      {images.length > 1 && (
        <div className="flex justify-between items-center">
          <button
            onClick={onPrev}
            className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors border-2 border-primary"
            aria-label={t('projectsSection.previousImage') || ''}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          
          <div className="flex gap-2" role="list">
            {images.map((_, index) => (
              <button
                key={index}
                role="list"
                aria-label={t('projectsSection.imageIndicator', {
                  number: index + 1,
                  current: index === currentIndex,
                })}
                className={`h-2 w-2 rounded-full transition-colors cursor-default ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={onNext}
            className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors border-2 border-primary"
            aria-label={t('projectsSection.nextImage') || ''}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(ImageGallery);
