"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  duration?: number;
}

/** Elementor counter: counts from 0 when scrolled into view (jQuery "swing" easing). */
export function Counter({ to, duration = 2000 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const decimals = (String(to).split(".")[1] ?? "").length;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 0.5 - Math.cos(progress * Math.PI) / 2;
        setValue(to * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}
