"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { trackLeadConversion } from "@/lib/tracking";
import { ButtonLink } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ButtonLink";
import { SiteFooter } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/SiteHeader";
import { responsivePadding } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/styles";

export default function KoszonjukPage() {
  useEffect(() => {
    trackLeadConversion();
  }, []);

  return (
    <div className="isolate mx-auto flex w-full max-w-[2000px] animate-pk-fade-in flex-col items-center overflow-hidden bg-pk-navy font-raleway">
      <SiteHeader />
      <main
        className={cn(
          "flex w-full flex-col items-center gap-5 py-[100px] text-center desk:py-[140px]",
          responsivePadding,
        )}
      >
        <h1 className="font-raleway text-[34px] font-bold text-white tab:text-[48px] desk:text-[58px]">
          Köszönjük az ajánlatkérést!
        </h1>
        <p className="max-w-[500px] font-raleway text-[16px] leading-[1.6] font-medium text-white/60 tab:text-[18px]">
          Hamarosan felvesszük Önnel a kapcsolatot.
        </p>
        <ButtonLink href="/" className="mt-[10px] text-[14px] tab:text-[18px]">
          Vissza a főoldalra
        </ButtonLink>
      </main>
      <SiteFooter className="mb-[100px] w-full desk:mb-[80px]" />
    </div>
  );
}
