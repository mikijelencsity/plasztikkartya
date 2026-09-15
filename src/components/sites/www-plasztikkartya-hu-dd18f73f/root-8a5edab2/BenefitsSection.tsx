import { cn } from "@/lib/utils";
import { BenefitFeatureDiagram } from "./BenefitFeatureDiagram";
import { ButtonLink } from "./ButtonLink";
import { benefits } from "./content";
import { boxedInner, responsivePadding, sectionHeading } from "./styles";

export function BenefitsSection() {
  return (
    <section className={cn("mt-[100px] w-full tab:mt-[50px] desk:mt-[120px]", responsivePadding)}>
      <div
        className={cn(
          boxedInner,
          "flex flex-col items-center desk:flex-row desk:items-center desk:justify-center desk:gap-x-[75px]",
        )}
      >
        <div className="flex w-full min-w-0 flex-col items-start gap-5 tab:mt-[100px] desk:mt-0 desk:w-[35%]">
          <h2 className={cn(sectionHeading, "text-start")}>{benefits.title}</h2>
          <ButtonLink href="#contact" className="mt-[10px] text-[14px] tab:mt-5 tab:text-[18px]">
            {benefits.cta}
          </ButtonLink>
        </div>

        <div className="mt-[50px] flex w-full min-w-0 flex-col items-center desk:mt-0 desk:w-[65%]">
          <BenefitFeatureDiagram />
        </div>
      </div>
    </section>
  );
}
