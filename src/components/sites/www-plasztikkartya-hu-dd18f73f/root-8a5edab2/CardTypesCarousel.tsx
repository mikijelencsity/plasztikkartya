"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "../shared/icons";
import { Carousel } from "./Carousel";
import { cardTypes, IMAGES } from "./content";

const arrow =
  "absolute top-[calc(100%+25px)] flex items-center justify-center rounded-full bg-pk-gold p-[10px] text-white hover:bg-white hover:text-pk-gold";

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
        const isSquare = card.image !== "vip-card.webp";
        return (
          <article className="flex h-full w-full flex-col items-center gap-5 rounded-[20px] p-[25px] tab:p-10">
            <Image
              src={`${IMAGES}/${card.image}`}
              alt={card.title}
              width={isSquare ? 1552 : 1488}
              height={isSquare ? 1552 : 1106}
              sizes="(min-width: 1051px) 30vw, 90vw"
              className="h-auto w-full self-center"
            />
            <h3 className="font-helvetica text-[20px] leading-[35px] font-medium text-white tab:text-[25px]">
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
