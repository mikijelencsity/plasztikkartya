"use client";

import { cn } from "@/lib/utils";
import { cardTypeIcons, ChevronLeftIcon, ChevronRightIcon } from "../shared/icons";
import { Carousel } from "./Carousel";
import { cardTypes } from "./content";

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
        const Icon = cardTypeIcons[card.icon];
        return (
          <article className="flex h-full w-full flex-col items-start gap-5 rounded-[20px] bg-[url(/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images/card-background.webp)] bg-cover bg-center bg-no-repeat p-[25px] tab:p-10">
            {/* Elementor icon widget: 50px inline-block icon in a 56px line box */}
            <div className="h-[56px]">
              <Icon className="size-[50px]" />
            </div>
            <h3 className="font-helvetica text-[20px] leading-[35px] font-medium text-white tab:text-[25px]">
              {card.title}
            </h3>
            <p className="font-helvetica text-[15px] leading-[28px] font-light tracking-[0.2px] text-white tab:leading-[29px]">
              {card.description}
            </p>
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
