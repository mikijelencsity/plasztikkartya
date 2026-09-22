import { cn } from "@/lib/utils";
import { QuoteIcon } from "../shared/icons";
import { testimonials, testimonialsSection } from "./content";
import { boxedInner, mutedText, responsivePadding, sectionHeading } from "./styles";

export function TestimonialsSection() {
  return (
    <section className={cn("mt-[100px] flex w-full flex-col items-center tab:mt-[120px]", responsivePadding)}>
      <h2 className={cn(sectionHeading, "text-center tab:text-start")}>{testimonialsSection.title}</h2>
      <p className={cn(mutedText, "mt-5 mb-[50px] w-[800px] max-w-full text-center")}>{testimonialsSection.text}</p>

      <div className="w-full desk:p-[10px]">
        <div className={cn(boxedInner, "grid grid-cols-1 gap-[30px] desk:grid-cols-2 desk:gap-y-0")}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-full flex-col items-start gap-4 rounded-[20px] bg-[url(/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images/card-background.webp)] bg-cover bg-center bg-no-repeat p-[20px] tab:p-[25px]"
            >
              <div className="h-[40px]">
                <QuoteIcon className="size-[34px]" />
              </div>
              <p className="font-raleway text-[14px] leading-[24px] font-light tracking-[0.2px] text-white">
                {testimonial.quote}
              </p>
              <div>
                <h3 className="font-raleway text-[17px] leading-[24px] font-medium text-white tab:text-[19px]">
                  {testimonial.name}
                </h3>
                <span className="font-raleway text-[12px] text-white/40">{testimonial.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
