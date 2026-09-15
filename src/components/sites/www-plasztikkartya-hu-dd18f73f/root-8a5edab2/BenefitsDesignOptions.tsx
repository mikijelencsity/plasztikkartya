import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "../shared/icons";
import { benefits } from "./content";
import { boxedInner, responsivePadding, sectionHeading } from "./styles";

const items = benefits.lists.flat();

function OptionShell({ no, name, children }: { no: number; name: string; children: ReactNode }) {
  return (
    <section className={cn("w-full py-[60px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <span className="mb-5 rounded-full border border-pk-gold px-3 py-1 font-raleway text-[11px] tracking-[0.06em] text-pk-gold-dark uppercase">
          Opció {no} — {name}
        </span>
        <h2 className={cn(sectionHeading, "text-center")}>{benefits.title}</h2>
        <div className="mt-[40px] w-full">{children}</div>
      </div>
    </section>
  );
}

export function BenefitsOption1Grid() {
  return (
    <OptionShell no={1} name="ikon-rács">
      <div className="grid w-full grid-cols-2 gap-4 tab:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex flex-col items-center gap-3 rounded-[16px] border border-white/10 bg-white/5 px-4 py-6 text-center"
          >
            <CheckCircleIcon className="size-7 text-pk-gold" />
            <span className="font-helvetica text-[15px] leading-[22px] font-medium text-white">{item}</span>
          </div>
        ))}
      </div>
    </OptionShell>
  );
}

export function BenefitsOption2Pills() {
  return (
    <OptionShell no={2} name="pill-sáv">
      <div className="flex w-full flex-wrap justify-center gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full bg-pk-field px-5 py-3 font-helvetica text-[14px] font-medium text-white"
          >
            <CheckCircleIcon className="size-4 text-pk-gold" />
            {item}
          </div>
        ))}
      </div>
    </OptionShell>
  );
}

export function BenefitsOption3Numbered() {
  return (
    <OptionShell no={3} name="számozott lista">
      <ul className="mx-auto flex w-full max-w-[560px] flex-col">
        {items.map((item, index) => (
          <li
            key={item}
            className="flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0"
          >
            <span className="font-helvetica text-[20px] font-bold text-pk-gold tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-helvetica text-[16px] font-medium text-white">{item}</span>
          </li>
        ))}
      </ul>
    </OptionShell>
  );
}

export function BenefitsOption4DividedCard() {
  return (
    <OptionShell no={4} name="osztott kártya">
      <div className="mx-auto w-full max-w-[560px] divide-y divide-white/10 rounded-[16px] bg-pk-field">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 px-6 py-4">
            <CheckCircleIcon className="size-5 shrink-0 text-pk-gold" />
            <span className="font-helvetica text-[15px] font-medium text-white">{item}</span>
          </div>
        ))}
      </div>
    </OptionShell>
  );
}

export function BenefitsOption5LargeFeatureCards() {
  return (
    <OptionShell no={5} name="nagy feature-kártyák">
      <div className="grid w-full grid-cols-1 gap-5 tab:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex flex-col gap-4 rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
          >
            <CheckCircleIcon className="size-9 text-pk-gold" />
            <span className="font-helvetica text-[18px] leading-[26px] font-medium text-white">{item}</span>
          </div>
        ))}
      </div>
    </OptionShell>
  );
}

export function BenefitsOption6CircleBadges() {
  return (
    <OptionShell no={6} name="kör-jelvények">
      <div className="flex w-full flex-wrap justify-center gap-8">
        {items.map((item) => (
          <div key={item} className="flex w-[110px] flex-col items-center gap-3 text-center">
            <div className="flex size-[72px] items-center justify-center rounded-full border-2 border-pk-gold">
              <CheckCircleIcon className="size-7 text-pk-gold" />
            </div>
            <span className="font-helvetica text-[13px] leading-[18px] font-medium text-white">{item}</span>
          </div>
        ))}
      </div>
    </OptionShell>
  );
}

export function BenefitsOption7TableGrid() {
  return (
    <OptionShell no={7} name="táblázatos rács">
      <div className="mx-auto grid w-full max-w-[720px] grid-cols-1 border-t border-l border-white/10 tab:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center border-r border-b border-white/10 px-4 py-6 text-center font-helvetica text-[14px] font-medium text-white"
          >
            {item}
          </div>
        ))}
      </div>
    </OptionShell>
  );
}

export function BenefitsOption8Staggered() {
  return (
    <OptionShell no={8} name="cikcakk elrendezés">
      <div className="mx-auto flex w-full max-w-[640px] flex-col gap-4">
        {items.map((item, index) => (
          <div
            key={item}
            className={cn(
              "flex w-[80%] items-center gap-3 rounded-[14px] bg-pk-field px-5 py-4",
              index % 2 === 0 ? "self-start" : "self-end",
            )}
          >
            <CheckCircleIcon className="size-5 shrink-0 text-pk-gold" />
            <span className="font-helvetica text-[15px] font-medium text-white">{item}</span>
          </div>
        ))}
      </div>
    </OptionShell>
  );
}

export function BenefitsOption9HorizontalScroll() {
  return (
    <OptionShell no={9} name="vízszintes görgetős kártyák">
      <div className="flex w-full gap-4 overflow-x-auto pb-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex w-[200px] shrink-0 flex-col items-start gap-3 rounded-[16px] border border-white/10 bg-white/5 p-5"
          >
            <CheckCircleIcon className="size-6 text-pk-gold" />
            <span className="font-helvetica text-[15px] leading-[21px] font-medium text-white">{item}</span>
          </div>
        ))}
      </div>
    </OptionShell>
  );
}

export function BenefitsOption10MinimalLarge() {
  return (
    <OptionShell no={10} name="minimál, nagy betűs lista">
      <ul className="mx-auto flex w-full max-w-[520px] flex-col gap-6">
        {items.map((item) => (
          <li key={item} className="flex items-baseline gap-4">
            <span aria-hidden="true" className="text-pk-gold">
              ✓
            </span>
            <span className="font-helvetica text-[24px] leading-[1.3] font-medium text-white">{item}</span>
          </li>
        ))}
      </ul>
    </OptionShell>
  );
}
