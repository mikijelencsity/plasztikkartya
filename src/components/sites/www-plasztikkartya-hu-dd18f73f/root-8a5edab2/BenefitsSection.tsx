import Image from "next/image";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "../shared/icons";
import { ButtonLink } from "./ButtonLink";
import { benefits, IMAGES } from "./content";
import { boxedInner, responsivePadding, sectionHeading } from "./styles";

export function BenefitsSection() {
  return (
    <section className={cn("mt-[100px] w-full tab:mt-[50px] desk:mt-[120px]", responsivePadding)}>
      <div
        className={cn(
          boxedInner,
          "flex flex-col items-center desk:flex-row desk:items-center desk:justify-center desk:gap-x-[150px]",
        )}
      >
        <div className="flex w-full min-w-0 flex-col items-start gap-5 tab:mt-[100px] desk:mt-0">
          <h2 className={cn(sectionHeading, "w-[631px] text-start")}>{benefits.title}</h2>

          <div className="mt-[10px] flex w-full flex-wrap items-start justify-start gap-x-[50px] tab:flex-nowrap">
            {benefits.lists.map((list, listIndex) => (
              <ul key={list[0]} className={cn("flex flex-col gap-5", listIndex > 0 && "mt-5 tab:mt-0")}>
                {list.map((item) => (
                  <li key={item} className="flex items-start gap-[5px]">
                    <CheckCircleIcon className="relative top-[2px] size-5 shrink-0 text-pk-gold" />
                    <span className="font-helvetica text-[18px] leading-[25px] font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <ButtonLink href="#contact" className="mt-[10px] text-[14px] tab:mt-5 tab:text-[18px]">
            {benefits.cta}
          </ButtonLink>
        </div>

        <div className="mt-[50px] flex w-full min-w-0 flex-col items-center desk:mt-0">
          <div className="relative w-full">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-[10%] right-[-180%] z-0 h-[220px] w-[400px] -translate-x-full bg-[url(/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images/graphic-element-01.png)] bg-cover bg-center bg-no-repeat tab:top-[-20%] tab:h-[735px] tab:w-[961px] tab:-translate-x-3/4"
            />
            <Image
              src={`${IMAGES}/vip-card.webp`}
              alt=""
              width={1024}
              height={761}
              sizes="(min-width: 1051px) 45vw, 100vw"
              className="relative z-[1] h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
