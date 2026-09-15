"use client";

import {
  type PointerEvent,
  type MouseEvent,
  type ReactNode,
  type TransitionEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/utils";

export interface CarouselControls {
  prev: () => void;
  next: () => void;
}

interface PerView {
  base: number;
  tab: number;
  desk: number;
}

interface CarouselProps<T> {
  items: T[];
  getKey: (item: T) => string;
  renderSlide: (item: T, index: number) => ReactNode;
  renderControls: (controls: CarouselControls) => ReactNode;
  perView: PerView;
  gap: number;
  label: string;
  speed?: number;
  autoplayDelay?: number;
  className?: string;
  slideClassName?: string;
}

// Swiper breakpoints used on the source site (min-width based).
const TAB_QUERY = "(min-width: 767px)";
const DESK_QUERY = "(min-width: 1050px)";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => true,
  );
}

export function Carousel<T>({
  items,
  getKey,
  renderSlide,
  renderControls,
  perView,
  gap,
  label,
  speed = 500,
  autoplayDelay,
  className,
  slideClassName,
}: CarouselProps<T>) {
  const isTab = useMediaQuery(TAB_QUERY);
  const isDesk = useMediaQuery(DESK_QUERY);
  const visible = isDesk ? perView.desk : isTab ? perView.tab : perView.base;

  const count = items.length;
  const clones = Math.min(count, Math.max(perView.base, perView.tab, perView.desk));
  const slides = [...items.slice(count - clones), ...items, ...items.slice(0, clones)];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const swiped = useRef(false);

  // Clamp to the rendered clone range so rapid clicks never run past the loop buffer.
  const go = useCallback(
    (delta: number) => {
      setAnimate(true);
      setIndex((current) => Math.min(Math.max(current + delta, -clones), count + clones - 1));
    },
    [clones, count],
  );

  const userGo = useCallback(
    (delta: number) => {
      setStopped(true);
      go(delta);
    },
    [go],
  );

  useEffect(() => {
    if (!autoplayDelay || hovered || stopped) return;
    const id = window.setInterval(() => go(1), autoplayDelay);
    return () => window.clearInterval(id);
  }, [autoplayDelay, hovered, stopped, go]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (index >= count) {
      setAnimate(false);
      setIndex(index - count);
    } else if (index < 0) {
      setAnimate(false);
      setIndex(index + count);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX;
    swiped.current = false;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    const deltaX = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(deltaX) > 40) {
      swiped.current = true;
      userGo(deltaX < 0 ? 1 : -1);
    }
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!swiped.current) return;
    event.preventDefault();
    event.stopPropagation();
    swiped.current = false;
  };

  const position = index + clones;
  const slideWidth = `((100% - ${gap * (visible - 1)}px) / ${visible})`;

  return (
    <div
      className={cn("relative w-full", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-full touch-pan-y overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onClickCapture={handleClickCapture}
      >
        <div
          className="flex w-full"
          style={{
            gap: `${gap}px`,
            transform: `translateX(calc(${-position} * (${slideWidth} + ${gap}px)))`,
            transition: animate ? `transform ${speed}ms ease` : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((item, slideIndex) => {
            const hidden = slideIndex < position || slideIndex >= position + visible;
            return (
              <div
                key={`${slideIndex}-${getKey(item)}`}
                className={cn("shrink-0", slideClassName)}
                style={{ width: `calc${slideWidth}` }}
                aria-hidden={hidden}
                inert={hidden}
              >
                {renderSlide(item, (slideIndex - clones + count) % count)}
              </div>
            );
          })}
        </div>
      </div>
      {renderControls({ prev: () => userGo(-1), next: () => userGo(1) })}
    </div>
  );
}
