import { cn } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";
import { CardComparison } from "./CardComparison";
import { intro } from "./content";
import { boxedInner, responsivePadding } from "./styles";

export function IntroSection() {
  return (
    <section className={cn("mt-[50px] w-full tab:mt-0 desk:mt-[100px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <div className="flex w-full shrink-0 grow-0 flex-col items-center gap-5 text-center tab:mt-[75px]">
          <h2 className="font-raleway text-[34px] leading-[42px] font-bold text-white tab:text-[48px] tab:leading-[58px] desk:text-[58px] desk:leading-[70px]">
            {intro.title}
          </h2>
        </div>

        <div className="mt-[40px] mb-[50px] flex w-full flex-col items-center gap-8 tab:mt-[50px] tab:mb-0 desk:max-w-[900px]">
          <CardComparison />
          <ButtonLink
            href="#contact"
            className="bg-pk-gold-dark px-[45px] pt-[21px] pb-[19px] text-[18px] tab:px-[55px] tab:text-[22px]"
          >
            {intro.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
