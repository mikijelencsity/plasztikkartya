import { cn } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";
import { IMAGES, intro } from "./content";
import { boxedInner, mutedText, responsivePadding } from "./styles";
import { ZoomableImage } from "./ZoomableImage";

export function IntroSection() {
  return (
    <section className={cn("mt-[50px] w-full tab:mt-0 desk:mt-[100px]", responsivePadding)}>
      <div
        className={cn(
          boxedInner,
          "flex flex-col items-center desk:flex-row desk:items-center desk:justify-center desk:gap-x-[75px]",
        )}
      >
        <div className="flex w-full shrink-0 grow-0 flex-col items-start gap-5 tab:mt-[75px] desk:mt-0 desk:w-[31%]">
          <h2 className="text-start font-helvetica text-[25px] leading-[40px] font-medium text-white tab:text-[35px] tab:leading-[55px] desk:text-[45px] desk:leading-[60px]">
            {intro.title}
          </h2>
          <p className={cn(mutedText, "mb-[10px] w-[800px] max-w-full text-start")}>{intro.text}</p>
          <ButtonLink href="#contact" className="text-[14px] tab:text-[18px]">
            {intro.cta}
          </ButtonLink>
        </div>

        <div className="mt-[40px] mb-[50px] flex w-full flex-col items-center tab:mt-[50px] tab:mb-0 desk:mt-0">
          <ZoomableImage
            image={{ src: `${IMAGES}/plastic-cards.webp`, alt: "", width: 1536, height: 561 }}
            full={{ src: `${IMAGES}/plastic-cards-large.webp`, alt: "", width: 2560, height: 935 }}
            sizes="(min-width: 1051px) 65vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
