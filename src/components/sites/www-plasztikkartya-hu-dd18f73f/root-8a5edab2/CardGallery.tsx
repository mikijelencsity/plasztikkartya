"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "../shared/icons";
import { Carousel } from "./Carousel";
import { galleryImages } from "./content";
import { Lightbox } from "./Lightbox";

const SIZE = 1552;
const lightboxImages = galleryImages.map((image) => ({ ...image, width: SIZE, height: SIZE }));

const arrow =
  "absolute top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-pk-gold p-2 text-white";

export function CardGallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Carousel
        items={galleryImages}
        getKey={(image) => image.src}
        perView={{ base: 1, tab: 2, desk: 4 }}
        gap={40}
        autoplayDelay={5000}
        label="Kép körhinta"
        renderSlide={(image, index) => (
          <a
            href={image.src}
            className="block"
            onClick={(event) => {
              event.preventDefault();
              setOpen(index);
            }}
          >
            <figure className="pb-[7px]">
              <Image
                src={image.src}
                alt={image.alt}
                width={SIZE}
                height={SIZE}
                draggable={false}
                sizes="(min-width: 1050px) 25vw, (min-width: 767px) 50vw, 100vw"
                className="block h-auto w-full"
              />
            </figure>
          </a>
        )}
        renderControls={({ prev, next }) => (
          <>
            <button type="button" aria-label="Previous slide" onClick={prev} className={cn(arrow, "left-[10px]")}>
              <ChevronLeftIcon className="size-[22px]" />
            </button>
            <button type="button" aria-label="Next slide" onClick={next} className={cn(arrow, "right-[10px]")}>
              <ChevronRightIcon className="size-[22px]" />
            </button>
          </>
        )}
      />
      <Lightbox images={lightboxImages} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}
