import { CheckCircleIcon } from "../shared/icons";
import { benefits } from "./content";
import { boxedInner, responsivePadding, sectionHeading } from "./styles";

export function BenefitsPreviewGrid() {
  const items = benefits.lists.flat();

  return (
    <section className={`w-full py-[60px] ${responsivePadding}`}>
      <div className={`${boxedInner} flex flex-col items-center`}>
        <span className="mb-5 rounded-full border border-pk-gold px-3 py-1 font-raleway text-[11px] tracking-[0.06em] text-pk-gold-dark uppercase">
          Design ötlet 1 — ikon-rács
        </span>
        <h2 className={`${sectionHeading} text-center`}>{benefits.title}</h2>
        <div className="mt-[40px] grid w-full grid-cols-2 gap-4 tab:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center gap-3 rounded-[16px] border border-white/10 bg-white/5 px-4 py-6 text-center"
            >
              <CheckCircleIcon className="size-7 text-pk-gold" />
              <span className="font-helvetica text-[15px] leading-[22px] font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
