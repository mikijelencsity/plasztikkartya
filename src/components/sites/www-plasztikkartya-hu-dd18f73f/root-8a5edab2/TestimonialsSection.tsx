import { cn } from "@/lib/utils";
import { QuoteIcon } from "../shared/icons";
import { testimonials, testimonialsSection } from "./content";
import { Counter } from "./Counter";
import { boxedInner, mutedText, responsivePadding, sectionHeading } from "./styles";

export function TestimonialsSection() {
  return (
    <section className={cn("mt-[100px] flex w-full flex-col items-center tab:mt-[120px]", responsivePadding)}>
      <h2 className={cn(sectionHeading, "text-center tab:text-start")}>{testimonialsSection.title}</h2>
      <p className={cn(mutedText, "mt-5 mb-[50px] w-[800px] max-w-full text-center")}>{testimonialsSection.text}</p>

      <div className="w-full desk:p-[10px]">
        <div className={cn(boxedInner, "grid grid-cols-1 gap-[50px] desk:grid-cols-3 desk:gap-y-0")}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-full flex-col items-start gap-5 rounded-[20px] desk:min-h-[440px] bg-[url(/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images/card-background.webp)] bg-cover bg-center bg-no-repeat p-[25px] tab:p-[35px]"
            >
              <div className="h-[56px]">
                <QuoteIcon className="size-[50px]" />
              </div>
              <p className="font-helvetica text-[15px] leading-[29px] font-light tracking-[0.2px] text-white">
                {testimonial.quote}
              </p>
              <h3 className="font-helvetica text-[20px] leading-[35px] font-medium text-white tab:text-[25px]">
                {testimonial.name}
              </h3>
              <div className="w-full py-[15px]">
                <span className="block w-full border-t border-white/22" />
              </div>
              <div className="flex w-full flex-wrap gap-x-[24px] gap-y-[12px]">
                {testimonial.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse">
                    <div className="items-center justify-start font-roboto text-[11px] leading-[1.6] font-normal text-white">
                      {stat.label}
                    </div>
                    <div className="font-helvetica text-[20px] leading-none font-bold text-pk-gold">
                      <Counter to={stat.value} />
                      <span>{stat.suffix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
