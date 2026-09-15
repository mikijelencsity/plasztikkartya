"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { boxedInner, responsivePadding } from "./styles";

const field =
  "w-full border-0 bg-pk-field font-raleway text-[14px] leading-[1.4] font-medium text-white/45 outline-none placeholder:text-white/45";

export function ContactPreviewTwoStep() {
  const [showStep2, setShowStep2] = useState(false);

  return (
    <section className={cn("w-full bg-pk-navy py-[60px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <span className="mb-5 rounded-full border border-pk-gold px-3 py-1 font-raleway text-[11px] tracking-[0.06em] text-pk-gold-dark uppercase">
          Előnézet 2 — nem éles
        </span>
        <h3 className="text-center font-helvetica text-[25px] font-medium text-white tab:text-[32px]">
          Kérjen visszahívást, vagy írjon részletes ajánlatkérést
        </h3>
        <p className="mt-[10px] mb-[26px] max-w-[560px] text-center font-raleway text-[14px] text-white/60">
          1. lépés: csak név és telefonszám. A részletek a 2. lépésben, ha szeretné pontosítani.
        </p>
        <div className="flex w-full max-w-[560px] flex-col gap-[18px]">
          <div className="overflow-hidden rounded-[14px] border border-white/10">
            <div className="flex items-center gap-[10px] bg-white/5 px-5 py-[14px] font-raleway text-[13px] text-white/60">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-pk-gold font-helvetica text-[12px] font-bold text-pk-navy">
                ✓
              </span>
              1. lépés — gyors visszahívás
            </div>
            <div className="flex flex-col gap-[10px] bg-pk-field p-5">
              <div className="flex flex-wrap gap-[10px]">
                <input placeholder="Név.." className={cn(field, "min-h-10 flex-1 basis-[160px] rounded-[3px] px-[15px] py-[10px]")} disabled />
                <input placeholder="Telefonszám.." className={cn(field, "min-h-10 flex-1 basis-[160px] rounded-[3px] px-[15px] py-[10px]")} disabled />
              </div>
              <div className="mt-[4px] flex flex-wrap items-center gap-[14px]">
                <button
                  type="button"
                  disabled
                  className="rounded-[10px] bg-pk-gold px-[26px] py-[13px] font-helvetica text-[14px] font-bold text-white"
                >
                  Visszahívást kérek
                </button>
                <button
                  type="button"
                  onClick={() => setShowStep2(true)}
                  className="font-raleway text-[12.5px] text-white/45"
                >
                  vagy <span className="text-pk-gold-dark underline">folytatom a részletes ajánlattal ↓</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-white/10">
            <div className="flex items-center gap-[10px] bg-white/5 px-5 py-[14px] font-raleway text-[13px] text-white/60">
              <span
                className={cn(
                  "flex h-[22px] w-[22px] items-center justify-center rounded-full font-helvetica text-[12px] font-bold",
                  showStep2 ? "border border-pk-gold text-pk-gold-dark" : "border border-white/20 text-white/40",
                )}
              >
                2
              </span>
              2. lépés — pontos ajánlathoz (nem kötelező)
            </div>
            {showStep2 ? (
              <div className="flex flex-col gap-[10px] bg-pk-field p-5">
                <p className="font-raleway text-[12.5px] text-white/60">
                  Eddig megadva: <span className="text-white">Teszt Elek</span> ·{" "}
                  <span className="text-white">+36 30 123 4567</span>
                </p>
                <div className="grid grid-cols-1 gap-[10px] tab:grid-cols-2">
                  <input placeholder="Cégnév (nem kötelező).." className={cn(field, "min-h-10 rounded-[3px] px-[15px] py-[10px]")} disabled />
                  <input placeholder="Email.." className={cn(field, "min-h-10 rounded-[3px] px-[15px] py-[10px]")} disabled />
                  <input placeholder="Kártyatípus ▾" className={cn(field, "min-h-10 rounded-[3px] px-[15px] py-[10px] tab:col-span-2")} disabled />
                  <textarea placeholder="Üzenet" rows={4} className={cn(field, "rounded-[3px] px-[14px] py-[10px] tab:col-span-2")} disabled />
                </div>
                <button
                  type="button"
                  disabled
                  className="mt-[4px] justify-self-start rounded-[10px] bg-pk-gold px-[26px] py-[13px] font-helvetica text-[14px] font-bold text-white"
                >
                  Részletes ajánlatkérés küldése
                </button>
              </div>
            ) : (
              <div className="bg-pk-field px-5 py-[18px] font-raleway text-[12.5px] text-white/35">
                Nyisd meg a fenti linkkel, ha szeretnéd látni ezt a lépést is.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
