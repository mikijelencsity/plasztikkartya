"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox, type LightboxImage } from "./Lightbox";

interface ZoomableImageProps {
  image: LightboxImage;
  full: LightboxImage;
  sizes: string;
}

/** Image widget with "open in lightbox" link. */
export function ZoomableImage({ image, full, sizes }: ZoomableImageProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <a
        href={full.src}
        className="block w-full"
        onClick={(event) => {
          event.preventDefault();
          setOpen(0);
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="h-auto w-full"
        />
      </a>
      <Lightbox images={[full]} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}
