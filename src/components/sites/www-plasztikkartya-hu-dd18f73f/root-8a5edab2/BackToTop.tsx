"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "../shared/icons";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** GeneratePress back-to-top button, shown after 300px of scroll. */
export function BackToTop() {
  const visible = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 300,
    () => false,
  );

  return (
    <a
      href="#"
      title="Ugrás a tetejére"
      aria-label="Ugrás a tetejére"
      rel="nofollow"
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={cn(
        "fixed right-[25px] bottom-[25px] z-10 flex size-10 items-center justify-center rounded-full bg-pk-gold-dark text-[20px] text-white transition-opacity duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-[1000px] opacity-10",
      )}
    >
      <ArrowUpIcon className="size-[1em]" />
    </a>
  );
}
