import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({ href, children, className }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-block rounded-[10px] bg-pk-gold px-[35px] pt-[17px] pb-[15px] font-raleway text-[18px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-pk-gold focus-visible:bg-white focus-visible:text-pk-gold",
        className,
        // Applied last: tailwind-merge drops leading-* when a later text-[size] class is merged in.
        "leading-none",
      )}
    >
      {children}
    </a>
  );
}
