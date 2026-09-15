"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../shared/icons";

export interface LightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null;
  const count = images.length;

  useEffect(() => {
    if (index === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (count > 1 && event.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      if (count > 1 && event.key === "ArrowRight") onIndexChange((index + 1) % count);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, count, onClose, onIndexChange]);

  if (!open) return null;
  const image = images[index];
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/87"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Bezárás"
        className="absolute top-4 right-4 flex size-10 items-center justify-center text-[28px] leading-none text-white/90 hover:text-white"
        onClick={onClose}
      >
        ×
      </button>
      {count > 1 && (
        <button
          type="button"
          aria-label="Előző"
          className="absolute left-4 flex size-12 items-center justify-center text-white/90 hover:text-white"
          onClick={(event) => {
            event.stopPropagation();
            onIndexChange((index - 1 + count) % count);
          }}
        >
          <ChevronLeftIcon className="size-8" />
        </button>
      )}
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
        onClick={(event) => event.stopPropagation()}
      />
      {count > 1 && (
        <button
          type="button"
          aria-label="Következő"
          className="absolute right-4 flex size-12 items-center justify-center text-white/90 hover:text-white"
          onClick={(event) => {
            event.stopPropagation();
            onIndexChange((index + 1) % count);
          }}
        >
          <ChevronRightIcon className="size-8" />
        </button>
      )}
    </div>
  );
}
