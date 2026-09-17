import Image from "next/image";
import { cn } from "@/lib/utils";
import { CardTypesCarousel } from "./CardTypesCarousel";
import { cardTypesSection, IMAGES } from "./content";
import { boxedInner, mutedText, responsivePadding, sectionHeading } from "./styles";

export function CardTypesSection() {
  return (
    <section className={cn("w-full tab:mt-[75px] desk:mt-[100px]", responsivePadding)}>
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <Image
          src={`${IMAGES}/vip-card.webp`}
          alt=""
          width={1488}
          height={1106}
          sizes="280px"
          className="mb-8 h-auto w-full max-w-[280px]"
        />
        <h2
          className={cn(
            sectionHeading,
            "text-start text-[28px] text-nowrap underline decoration-pk-gold underline-offset-[10px] tab:text-[46px]",
          )}
        >
          {cardTypesSection.title}
        </h2>
        <p className={cn(mutedText, "mt-5 mb-[50px] w-[800px] max-w-full text-center text-white")}>
          {cardTypesSection.text}
        </p>
        <div className="-mx-[25px] w-[calc(100%+50px)] tab:mx-0 tab:w-full wide:-mx-[50px] wide:w-[calc(100%+100px)]">
          <CardTypesCarousel />
        </div>
      </div>
    </section>
  );
}
