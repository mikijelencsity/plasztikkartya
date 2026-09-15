"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "../shared/icons";
import { whyUsItems, whyUsSection } from "./content";
import { boxedInner, responsivePadding } from "./styles";

const AUTOPLAY_MS = 4000;

const arrow =
  "flex size-10 shrink-0 items-center justify-center rounded-full bg-pk-gold text-white transition-colors hover:bg-white hover:text-pk-gold tab:size-12";

export function WhyUsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % whyUsItems.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index]);

  function goTo(next: number) {
    setIndex((next + whyUsItems.length) % whyUsItems.length);
  }

  return (
    <section className={cn("w-full py-[80px] tab:py-[110px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <span className="mb-6 font-raleway text-[13px] font-medium tracking-[0.2em] text-pk-gold uppercase">
          {whyUsSection.eyebrow}
        </span>

        <div className="flex w-full items-center justify-center gap-4 tab:gap-8">
          <button type="button" aria-label="Előző" onClick={() => goTo(index - 1)} className={arrow}>
            <ChevronLeftIcon className="size-4 tab:size-5" />
          </button>

          <div className="flex min-h-[120px] w-full max-w-[900px] flex-col items-center justify-center overflow-hidden tab:min-h-[160px]">
            <h2
              key={index}
              className="animate-pk-headline-in inline-block text-center font-helvetica text-[30px] leading-[1.15] font-bold text-white tab:text-[48px] desk:text-[62px]"
            >
              {whyUsItems[index]}
            </h2>
            <span
              key={`u-${index}`}
              className="animate-pk-underline-in mt-4 block h-[6px] w-[70%] max-w-[420px] origin-center rounded-full bg-pk-gold tab:h-[8px]"
            />
          </div>

          <button type="button" aria-label="Következő" onClick={() => goTo(index + 1)} className={arrow}>
            <ChevronRightIcon className="size-4 tab:size-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {whyUsItems.map((item, dotIndex) => (
            <button
              key={item}
              type="button"
              aria-label={`Ugrás: ${item}`}
              onClick={() => goTo(dotIndex)}
              className={cn(
                "h-[8px] rounded-full transition-all",
                dotIndex === index ? "w-[24px] bg-pk-gold" : "w-[8px] bg-white/25",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
