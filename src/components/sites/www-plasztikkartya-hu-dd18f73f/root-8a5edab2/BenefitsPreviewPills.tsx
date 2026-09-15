import { CheckCircleIcon } from "../shared/icons";
import { benefits } from "./content";
import { boxedInner, responsivePadding, sectionHeading } from "./styles";

export function BenefitsPreviewPills() {
  const items = benefits.lists.flat();

  return (
    <section className={`w-full py-[60px] ${responsivePadding}`}>
      <div className={`${boxedInner} flex flex-col items-center`}>
        <span className="mb-5 rounded-full border border-pk-gold px-3 py-1 font-raleway text-[11px] tracking-[0.06em] text-pk-gold-dark uppercase">
          Design ötlet 2 — pill sáv
        </span>
        <h2 className={`${sectionHeading} text-center`}>{benefits.title}</h2>
        <div className="mt-[40px] flex w-full flex-wrap justify-center gap-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full bg-pk-field px-5 py-3 font-helvetica text-[14px] font-medium text-white"
            >
              <CheckCircleIcon className="size-4 text-pk-gold" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
