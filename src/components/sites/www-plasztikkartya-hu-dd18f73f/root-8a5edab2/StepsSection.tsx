import { cn } from "@/lib/utils";
import { stepIcons } from "../shared/icons";
import { ButtonLink } from "./ButtonLink";
import { steps, stepsSection } from "./content";
import { boxedInner, mutedText, responsivePadding, sectionHeading } from "./styles";

export function StepsSection() {
  return (
    <section className={cn("mt-[50px] w-full tab:mt-0 desk:mt-[120px]", responsivePadding)}>
      <div className={boxedInner}>
        <div className="flex w-full flex-col items-center justify-center gap-5 tab:mt-[100px] desk:mt-0">
          <h2 className={cn(sectionHeading, "w-[631px] text-center")}>{stepsSection.title}</h2>
          <p className={cn(mutedText, "my-[10px] w-[800px] max-w-full text-center")}>{stepsSection.text}</p>

          <div className="mt-5 grid w-full grid-cols-1 gap-10 tab:grid-cols-2 desk:grid-cols-5 desk:gap-x-[30px] desk:gap-y-0">
            {stepIcons.map((Icon, index) => {
              const step = steps[index];
              if (!step) return null;
              return (
                <div key={step.title} className="flex flex-col items-center justify-start gap-5">
                  <div className="h-[56px]">
                    <Icon className="size-[50px]" />
                  </div>
                  <h4 className="text-center font-helvetica text-[25px] leading-none font-medium text-white">
                    {step.title}
                  </h4>
                  <p className="my-[10px] w-[800px] max-w-full text-center font-helvetica text-[16px] leading-[30px] font-normal text-white/40">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <ButtonLink href="#contact" className="text-[14px] tab:mt-5 tab:text-[18px]">
            {stepsSection.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
