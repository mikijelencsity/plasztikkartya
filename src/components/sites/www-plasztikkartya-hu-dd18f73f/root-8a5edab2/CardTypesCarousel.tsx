"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "../shared/icons";
import { Carousel } from "./Carousel";
import { cardTypes, IMAGES } from "./content";

const arrow =
  "absolute top-[calc(100%+25px)] flex items-center justify-center rounded-full bg-pk-gold p-[10px] text-white hover:bg-white hover:text-pk-gold";

// Real pixel dimensions per image, used only to preserve aspect ratio (display size comes from className).
const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "card-02.webp": { width: 1552, height: 1552 },
  "card-gift-ai.webp": { width: 1454, height: 1082 },
  "card-transparent-ai.webp": { width: 1254, height: 1254 },
  "card-vip-ai.webp": { width: 1254, height: 1254 },
  "card-door-ai.webp": { width: 1536, height: 1024 },
  "card-customgraphic-ai.webp": { width: 1536, height: 1024 },
  "card-id-ai.webp": { width: 1371, height: 1148 },
  "card-discount-ai.webp": { width: 1536, height: 1024 },
  "card-loyalty-ai.webp": { width: 1254, height: 1254 },
  "card-warranty-ai.webp": { width: 1254, height: 1254 },
  "card-sportpass-ai.webp": { width: 1371, height: 1147 },
};

export function CardTypesCarousel() {
  return (
    <Carousel
      items={cardTypes}
      getKey={(card) => card.title}
      perView={{ base: 1, tab: 2, desk: 3 }}
      gap={50}
      label="Körhinta"
      slideClassName="flex"
      renderSlide={(card) => {
        const { width, height } = IMAGE_DIMENSIONS[card.image];
        return (
          <article className="flex h-full w-full flex-col items-center gap-5 rounded-[20px] px-0 py-[10px] tab:rounded-[20px] tab:p-10">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={`${IMAGES}/${card.image}`}
                alt={card.title}
                width={width}
                height={height}
                sizes="(min-width: 1051px) 30vw, 90vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="px-[25px] text-center font-raleway text-[30px] leading-[38px] font-bold text-white tab:px-0 tab:text-[32px]">
              {card.title}
            </h3>
          </article>
        );
      }}
      renderControls={({ prev, next }) => (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className={cn(arrow, "left-[calc(50%-28px)] -translate-x-1/2")}
          >
            <ChevronLeftIcon className="size-[15px] tab:size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className={cn(arrow, "right-[calc(50%-28px)] translate-x-1/2")}
          >
            <ChevronRightIcon className="size-[15px] tab:size-5" />
          </button>
        </>
      )}
    />
  );
}
