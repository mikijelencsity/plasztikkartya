import Link from "next/link";
import type { ReactNode } from "react";
import { BackToTop } from "./BackToTop";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { boxedInner, responsivePadding } from "./styles";

const h2 = "font-raleway text-[22px] leading-[32px] font-bold text-white tab:text-[26px]";
const p = "font-raleway text-[16px] leading-[28px] font-normal text-white/70";
const ul = "flex flex-col gap-2 font-raleway text-[16px] leading-[28px] font-normal text-white/70 list-disc pl-5";

export const legalText = { h2, p, ul };

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <div className="isolate mx-auto flex w-full max-w-[2000px] flex-col items-center overflow-hidden bg-pk-navy font-raleway">
        <SiteHeader />
        <main className={`flex w-full flex-col ${responsivePadding}`}>
          <div className={`${boxedInner} flex flex-col gap-10 py-[60px] tab:py-[90px]`}>
            <div className="flex flex-col gap-3">
              <Link href="/" className="w-fit font-raleway text-[14px] font-medium text-pk-gold">
                ← Vissza a főoldalra
              </Link>
              <h1 className="font-raleway text-[32px] leading-[40px] font-bold text-white tab:text-[46px]">
                {title}
              </h1>
              <p className="font-raleway text-[14px] font-medium text-white/40">Hatályos: {updated}</p>
            </div>
            <div className="flex max-w-[820px] flex-col gap-8">{children}</div>
          </div>
          <SiteFooter className={`${boxedInner} border-t border-white/10 pt-[40px] pb-[60px]`} />
        </main>
      </div>
      <BackToTop />
    </>
  );
}
