import { cn } from "@/lib/utils";
import { CardTypesCarousel } from "./CardTypesCarousel";
import { cardTypesSection } from "./content";
import { boxedInner, mutedText, responsivePadding, sectionHeading } from "./styles";

export function CardTypesSection() {
  return (
    <section className={cn("w-full tab:mt-[75px] desk:mt-[100px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <h2 className={cn(sectionHeading, "text-start")}>{cardTypesSection.title}</h2>
        <p className={cn(mutedText, "mt-5 mb-[50px] w-[800px] max-w-full text-center")}>{cardTypesSection.text}</p>
        <CardTypesCarousel />
      </div>
    </section>
  );
}
