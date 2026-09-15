"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { cardTypeIcons } from "../shared/icons";
import { cardTypes } from "./content";
import { boxedInner, responsivePadding } from "./styles";

const field =
  "w-full border-0 bg-pk-field font-raleway text-[14px] leading-[1.4] font-medium text-white/45 outline-none placeholder:text-white/45";

const stats = [
  { n: "10 db-tól", l: "gyártható mennyiség" },
  { n: "1 munkanap", l: "válaszidő az ajánlatra" },
  { n: "Díjmentes", l: "grafikai egyeztetés" },
];

export function ContactPreviewCardPicker() {
  const [active, setActive] = useState(cardTypes[0].icon);

  return (
    <section className={cn("w-full bg-pk-navy py-[60px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <span className="mb-5 rounded-full border border-pk-gold px-3 py-1 font-raleway text-[11px] tracking-[0.06em] text-pk-gold-dark uppercase">
          Előnézet 1 — nem éles
        </span>
        <div className="mb-8 grid w-full max-w-[640px] grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-[10px] border border-white/10">
          {stats.map((stat) => (
            <div key={stat.l} className="bg-white/5 px-3 py-4 text-center">
              <div className="font-helvetica text-[18px] font-bold text-pk-gold-dark">{stat.n}</div>
              <div className="mt-1 font-raleway text-[11px] text-white/45">{stat.l}</div>
            </div>
          ))}
        </div>
        <h3 className="text-center font-helvetica text-[25px] font-medium text-white tab:text-[32px]">
          Rendeljen plasztikkártyát most!
        </h3>
        <p className="mt-[10px] mb-[26px] max-w-[560px] text-center font-raleway text-[14px] text-white/60">
          Válassza ki, milyen kártyát tervezett, és mi megvalósítjuk aláírás-mezővel, mágnesszalaggal, vonalkóddal is.
        </p>
        <div className="mb-6 flex w-full max-w-[640px] gap-[10px] overflow-x-auto pb-2">
          {cardTypes.map((card) => {
            const Icon = cardTypeIcons[card.icon];
            const isActive = active === card.icon;
            return (
              <button
                key={card.icon}
                type="button"
                onClick={() => setActive(card.icon)}
                className={cn(
                  "flex w-[84px] shrink-0 flex-col items-center gap-2 rounded-[10px] border px-2 py-[10px]",
                  isActive ? "border-pk-gold bg-pk-gold/10" : "border-white/10 bg-white/5",
                )}
              >
                <Icon className="h-6 w-9 rounded" />
                <span className={cn("text-center font-raleway text-[10.5px] leading-tight", isActive ? "text-white" : "text-white/60")}>
                  {card.title}
                </span>
              </button>
            );
          })}
        </div>
        <div className="grid w-full max-w-[640px] grid-cols-1 gap-3 tab:grid-cols-2">
          <input placeholder="Név.." className={cn(field, "min-h-10 rounded-[3px] px-[15px] py-[10px]")} disabled />
          <input placeholder="Cégnév (nem kötelező).." className={cn(field, "min-h-10 rounded-[3px] px-[15px] py-[10px]")} disabled />
          <input placeholder="Email.." className={cn(field, "min-h-10 rounded-[3px] px-[15px] py-[10px]")} disabled />
          <input placeholder="Telefonszám.." className={cn(field, "min-h-10 rounded-[3px] px-[15px] py-[10px]")} disabled />
          <textarea placeholder="Üzenet" rows={4} className={cn(field, "rounded-[3px] px-[14px] py-[10px] tab:col-span-2")} disabled />
          <button
            type="button"
            disabled
            className="justify-self-start rounded-[10px] bg-pk-gold px-[30px] pt-[17px] pb-[15px] font-helvetica text-[16px] leading-none font-bold text-white tab:col-span-2"
          >
            Üzenet küldése
          </button>
        </div>
      </div>
    </section>
  );
}
