"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MouseTiltProps {
  children: ReactNode;
  className?: string;
}

/** Elementor Pro "Mouse Track → 3D Tilt" (speed 1.5): rotateX/rotateY follow the pointer, 0.4s transition. */
export function MouseTilt({ children, className }: MouseTiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const handleMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      element.style.setProperty("--tilt-x", `${(0.5 - y) * 20}deg`);
      element.style.setProperty("--tilt-y", `${(x - 0.5) * 20}deg`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-transform duration-400 [transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))]",
        className,
      )}
    >
      {children}
    </div>
  );
}
