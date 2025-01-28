import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, currentIndex, onNext, onPrev }) => (
  <div className="space-y-4">
    {/* Galeria de imagens */}
    <div className="h-[400px] relative bg-light-accent/20 rounded-xl border border-border overflow-hidden flex items-center justify-center">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Imagem ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>

    {/* Controles de navegação */}
    {images.length > 1 && (
      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors border-2 border-primary"
          aria-label="Imagem anterior"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-400"
              }`}
              aria-label={`Indicador de imagem ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={onNext}
          className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors border-2 border-primary"
          aria-label="Próxima imagem"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    )}
  </div>
);

export default React.memo(ImageGallery);
