import { cn } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";
import { CardComparison } from "./CardComparison";
import { intro } from "./content";
import { boxedInner, responsivePadding } from "./styles";

export function IntroSection() {
  return (
    <section className={cn("mt-[50px] w-full tab:mt-0 desk:mt-[100px]", responsivePadding)}>
      <div
        className={cn(
          boxedInner,
          "flex flex-col items-center desk:flex-row desk:items-center desk:justify-center desk:gap-x-[75px]",
        )}
      >
        <div className="flex w-full shrink-0 grow-0 flex-col items-start gap-5 tab:mt-[75px] desk:mt-0 desk:w-[26%]">
          <h2 className="text-start font-raleway text-[34px] leading-[42px] font-medium text-white tab:text-[48px] tab:leading-[58px] desk:text-[58px] desk:leading-[70px]">
            {intro.title}
          </h2>
          <ButtonLink href="#contact" className="text-[14px] tab:text-[18px]">
            {intro.cta}
          </ButtonLink>
        </div>

        <div className="mt-[40px] mb-[50px] flex w-full flex-col items-center tab:mt-[50px] tab:mb-0 desk:mt-0 desk:w-[74%]">
          <CardComparison />
        </div>
      </div>
    </section>
  );
}
