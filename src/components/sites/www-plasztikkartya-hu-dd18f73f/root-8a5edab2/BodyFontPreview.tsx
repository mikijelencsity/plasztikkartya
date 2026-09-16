import { boxedInner, responsivePadding } from "./styles";

const SAMPLE =
  "A plasztikkártya tartós, elegáns és professzionális megjelenést biztosít, legyen szó hűségkártyáról, belépőkártyáról, névjegykártyáról vagy azonosító kártyáról.";

const FONTS: { no: string; name: string; family: string; weight: number }[] = [
  { no: "01", name: "Sora", family: "Sora", weight: 600 },
  { no: "02", name: "Manrope", family: "Manrope", weight: 600 },
  { no: "03", name: "Plus Jakarta Sans", family: "Plus Jakarta Sans", weight: 600 },
  { no: "04", name: "Outfit", family: "Outfit", weight: 600 },
  { no: "05", name: "Urbanist", family: "Urbanist", weight: 700 },
  { no: "06", name: "Figtree", family: "Figtree", weight: 600 },
  { no: "07", name: "Hanken Grotesk", family: "Hanken Grotesk", weight: 600 },
  { no: "08", name: "Onest", family: "Onest", weight: 600 },
  { no: "09", name: "Schibsted Grotesk", family: "Schibsted Grotesk", weight: 600 },
  { no: "10", name: "Instrument Sans", family: "Instrument Sans", weight: 600 },
];

const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Manrope:wght@600;700&family=Plus+Jakarta+Sans:wght@600;700&family=Outfit:wght@600;700&family=Urbanist:wght@600;700&family=Figtree:wght@600;700&family=Hanken+Grotesk:wght@600;700&family=Onest:wght@600;700&family=Schibsted+Grotesk:wght@600;700&family=Instrument+Sans:wght@600;700&display=swap";

export function BodyFontPreview() {
  return (
    <section className={`w-full py-[60px] ${responsivePadding}`}>
      <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      <div className={`${boxedInner} flex flex-col items-center`}>
        <span className="mb-8 rounded-full border border-pk-gold px-3 py-1 font-raleway text-[11px] tracking-[0.06em] text-pk-gold-dark uppercase">
          Előnézet — 10 törzsszöveg betűtípus
        </span>
        <div className="flex w-full max-w-[760px] flex-col gap-4">
          {FONTS.map((font) => (
            <div key={font.no} className="rounded-[14px] border border-white/10 bg-white/5 px-6 py-5">
              <div className="mb-3 flex items-baseline justify-between border-b border-white/10 pb-3">
                <span className="font-helvetica text-[15px] font-bold text-white">
                  <span className="mr-2 text-pk-gold-dark">{font.no}</span>
                  {font.name}
                </span>
                <span className="rounded-full border border-white/15 px-2 py-[2px] font-raleway text-[11px] text-white/40 uppercase">
                  {font.weight}
                </span>
              </div>
              <p className="text-[18px] leading-[1.55] text-white" style={{ fontFamily: font.family, fontWeight: font.weight }}>
                {SAMPLE}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
