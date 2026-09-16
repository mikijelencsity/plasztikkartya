import { boxedInner, responsivePadding } from "./styles";

const PARTNERS = ["ANTÉUS", "NISZ", "JEGYMESTER", "ASSA ABLOY", "SWARCO", "BUDAPEST CARD"];

export function TrustedPartners() {
  return (
    <section className={`w-full py-[40px] ${responsivePadding}`}>
      <div className={`${boxedInner} flex flex-col items-center gap-6`}>
        <span className="font-raleway text-[11px] font-medium tracking-[0.3em] text-white/40 uppercase">
          Megbízható gyártópartner
        </span>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="font-raleway text-[15px] font-semibold tracking-[0.04em] text-white/35 uppercase tab:text-[17px]"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
