import Image from "next/image";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";
import { hero, IMAGES } from "./content";
import { MouseTilt } from "./MouseTilt";
import { boxedInner, responsivePadding } from "./styles";

const glow =
  "pointer-events-none absolute -z-10 h-[220px] w-[400px] bg-[url(/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images/graphic-element-01.png)] bg-cover bg-center bg-no-repeat tab:h-[735px] tab:w-[961px]";

export function HeroSection() {
  return (
    <section className={cn("w-full pt-[60px] tab:pt-0", responsivePadding)}>
      <div className={cn(boxedInner, "flex justify-center")}>
        <div className="flex w-full flex-col items-center gap-5 tab:mt-[75px] desk:mt-0">
          <h1 className="-mb-[5px] text-center font-helvetica text-[40px] leading-none font-normal text-white tab:mb-0 tab:text-[65px] desk:text-[105px]">
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </h1>

          <div className="relative -mt-[92px] flex w-full flex-col tab:w-[500px] desk:mt-0 desk:w-[660px]">
            <span
              aria-hidden="true"
              // Elementor's `.e-con::before` also sets left: 0, which overrides the custom right: -100%.
              className={cn(glow, "top-[23%] left-0 -translate-x-3/4 rotate-180 tab:top-[-54%]")}
            />
            <span aria-hidden="true" className={cn(glow, "top-[25%] right-0 translate-x-3/4 tab:top-[-50%]")} />
            <MouseTilt className="relative z-[1] mt-[10px] tab:-mt-[34px] desk:-mt-[165px]">
              <Image
                src={`${IMAGES}/hero-card.webp`}
                alt=""
                width={1536}
                height={1284}
                priority
                sizes="(min-width: 1051px) 660px, 500px"
                className="h-auto w-full max-w-[500px] rotate-5 desk:max-w-[660px]"
              />
            </MouseTilt>
          </div>

          <p className="w-full text-center font-helvetica text-[16px] leading-[30px] font-normal text-white tab:w-3/4 tab:text-[18px] tab:leading-[35px] desk:mb-[27px] desk:w-[800px] desk:max-w-full">
            {hero.text}
          </p>

          <ButtonLink href="#contact" className="text-[14px] tab:text-[18px]">
            {hero.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
