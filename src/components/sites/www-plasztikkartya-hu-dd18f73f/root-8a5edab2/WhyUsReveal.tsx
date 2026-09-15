"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { whyUsItems, whyUsSection } from "./content";
import { boxedInner, responsivePadding } from "./styles";

function useInView(threshold: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function WhyUsLine({ text }: { text: string }) {
  const [ref, inView] = useInView(0.5);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <h2
        className={cn(
          "text-center font-helvetica text-[28px] leading-[1.15] font-bold text-white transition-all duration-700 ease-out tab:text-[46px] desk:text-[60px]",
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        {text}
      </h2>
      <span
        className={cn(
          "mt-4 h-[6px] w-[70%] max-w-[420px] origin-center rounded-full bg-pk-gold transition-transform duration-700 ease-out tab:h-[8px]",
          inView ? "scale-x-100" : "scale-x-0",
        )}
      />
    </div>
  );
}

export function WhyUsReveal() {
  return (
    <section className={cn("w-full py-[60px] tab:py-[80px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <span className="mb-[70px] font-raleway text-[13px] font-medium tracking-[0.2em] text-pk-gold uppercase">
          {whyUsSection.eyebrow}
        </span>
        <div className="flex w-full flex-col items-center gap-[90px] tab:gap-[130px]">
          {whyUsItems.map((item) => (
            <WhyUsLine key={item} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
