import React from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onNavigate: (index: number) => void;
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  currentIndex,
  onNext,
  onPrev,
  onNavigate,
  title
}) => {
  const { t } = useTranslation();

  if (images.length === 0) {
    return (
      <div className="relative aspect-[4/3] bg-light-accent/20 flex items-center justify-center">
        <div className="flex flex-col items-center text-secondary-text">
          <PhotoIcon className="h-12 w-12 mb-2" />
          <p>{t('projectsSection.noImages')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] bg-card-bg dark:bg-secondary-bg shadow-md border border-border overflow-hidden">
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
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex justify-between items-center">
          <button
            onClick={onPrev}
            className="p-2 border-2 border-primary hover:bg-primary text-primary hover:text-white rounded-full transition-all transform hover:scale-105 shadow-sm"
            aria-label={t('projectsSection.previousImage') || ''}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div className="flex gap-1.5" role="list">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`h-1.5 w-6 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={t('projectsSection.imageIndicator', {
                  number: index + 1,
                  current: index === currentIndex,
                })}
              />
            ))}
          </div>
          <button
            onClick={onNext}
            className="p-2 border-2 border-primary hover:bg-primary text-primary hover:text-white rounded-full transition-all transform hover:scale-105 shadow-sm"
            aria-label={t('projectsSection.nextImage') || ''}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(ImageGallery);