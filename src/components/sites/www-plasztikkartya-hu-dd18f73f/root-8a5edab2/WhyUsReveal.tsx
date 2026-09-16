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
          "text-center font-helvetica text-[44px] leading-[1.08] font-bold text-white transition-all duration-1000 ease-out tab:text-[72px] desk:text-[104px]",
          inView ? "translate-y-0 scale-100 opacity-100 blur-none" : "translate-y-12 scale-95 opacity-0 blur-md",
        )}
      >
        {text}
      </h2>
      <span
        className={cn(
          "mt-6 h-[7px] w-[75%] max-w-[560px] origin-center rounded-full bg-gradient-to-r from-transparent via-pk-gold to-transparent transition-transform delay-300 duration-700 ease-out tab:h-[9px] tab:mt-8",
          inView ? "scale-x-100" : "scale-x-0",
        )}
      />
    </div>
  );
}

export function WhyUsReveal() {
  return (
    <section className={cn("w-full py-[80px] tab:py-[120px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <span className="mb-[80px] font-raleway text-[14px] font-medium tracking-[0.3em] text-pk-gold uppercase">
          {whyUsSection.eyebrow}
        </span>
        <div className="flex w-full flex-col items-center gap-[110px] tab:gap-[170px]">
          {whyUsItems.map((item) => (
            <WhyUsLine key={item} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
