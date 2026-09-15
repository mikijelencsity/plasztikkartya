import { cn } from "@/lib/utils";
import { BenefitFeatureDiagram } from "./BenefitFeatureDiagram";
import { ButtonLink } from "./ButtonLink";
import { benefits } from "./content";
import { boxedInner, responsivePadding } from "./styles";

export function BenefitsSection() {
  return (
    <section className={cn("mt-[100px] w-full tab:mt-[50px] desk:mt-[120px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center gap-5")}>
        <BenefitFeatureDiagram />
        <ButtonLink href="#contact" className="mt-[10px] text-[14px] tab:mt-5 tab:text-[18px]">
          {benefits.cta}
        </ButtonLink>
      </div>
    </section>
  );
}
