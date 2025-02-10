import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from 'next-i18next';

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
  title,
}) => {
  const { t } = useTranslation();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure we're on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when overlay is open.
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOverlayOpen]);

  // When the overlay is open, listen for the ESC key in the capture phase
  // and stop propagation so that the modal’s ESC handler is not triggered.
  useEffect(() => {
    if (!isOverlayOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setIsOverlayOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [isOverlayOpen]);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[4/3] bg-light-accent/20 flex items-center justify-center">
        <div className="flex flex-col items-center text-secondary-text">
          <PhotoIcon className="h-12 w-12 mb-2" />
          <p>{t("projectsSection.noImages")}</p>
        </div>
      </div>
    );
  }

  // The overlay content to be rendered in a portal
  const overlayContent = (
    <div
      className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center"
      onClick={() => setIsOverlayOpen(false)}
    >
      {/* Image container */}
      <div
        className="relative w-[90vw] h-[90vh] max-w-[1200px] max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={t("projectsSection.imageAlt", {
            title,
            number: currentIndex + 1,
          })}
          fill
          sizes="(max-width: 768px) 90vw, 80vw"
          style={{ objectFit: "contain" }}
          loading="lazy"
        />
      </div>

      <button
        className="absolute top-4 right-4 z-[1010] text-white hover:text-gray-200 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setIsOverlayOpen(false);
        }}
        aria-label={t("projectsSection.closeOverlay")}
      >
        <XMarkIcon className="h-8 w-8" />
      </button>

      {/* Navigation arrows in overlay */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 bottom-4 lg:top-1/2 lg:-translate-y-1/2 p-2 text-white hover:text-gray-200 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label={t("projectsSection.previousImage")}
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          <button
            className="absolute right-4 bottom-4 lg:top-1/2 lg:-translate-y-1/2 p-2 text-white hover:text-gray-200 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label={t("projectsSection.nextImage")}
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Bottom dots indicator in overlay */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(index);
              }}
              aria-label={t("projectsSection.imageIndicator", {
                number: index + 1,
                current: index === currentIndex,
              })}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Main Image Preview */}
      <div
        className={`relative aspect-[4/2] sm:aspect-[4/3] bg-card-bg dark:bg-secondary-bg shadow-md border border-border overflow-hidden cursor-pointer transition-opacity duration-300 ${isOverlayOpen ? "opacity-0" : "opacity-100"
          }`}
        onClick={() => setIsOverlayOpen(true)}
      >
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-300 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={img}
              alt={t("projectsSection.imageAlt", { title, number: index + 1 })}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls (below main preview) */}
      {images.length > 1 && (
        <div className="flex justify-between items-center">
          <button
            onClick={onPrev}
            className="p-2 border-2 border-primary hover:bg-primary text-primary hover:text-white rounded-full transition-all transform hover:scale-105 shadow-sm"
            aria-label={t("projectsSection.previousImage") || ""}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div className="flex gap-1.5" role="list">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`h-1.5 w-6 rounded-full transition-all ${index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                  }`}
                aria-label={t("projectsSection.imageIndicator", {
                  number: index + 1,
                  current: index === currentIndex,
                })}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            className="p-2 border-2 border-primary hover:bg-primary text-primary hover:text-white rounded-full transition-all transform hover:scale-105 shadow-sm"
            aria-label={t("projectsSection.nextImage") || ""}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Render the overlay in a portal */}
      {isOverlayOpen && mounted && createPortal(overlayContent, document.body)}
    </div>
  );
};

export default React.memo(ImageGallery);
