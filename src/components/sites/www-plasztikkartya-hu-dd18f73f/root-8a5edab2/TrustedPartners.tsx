import { boxedInner, responsivePadding } from "./styles";

const PARTNERS = ["ANTÉUS", "NISZ", "JEGYMESTER", "ASSA ABLOY", "SWARCO", "BUDAPEST CARD"];

export function TrustedPartners() {
  return (
    <section className={`w-full py-[70px] ${responsivePadding}`}>
      <div className={`${boxedInner} flex flex-col items-center gap-10`}>
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-white/15" />
          <span className="font-raleway text-[12px] font-medium tracking-[0.3em] text-pk-gold-dark uppercase">
            Megbízható gyártópartner
          </span>
          <span className="h-px w-10 bg-white/15" />
        </div>
        <div className="grid w-full max-w-[860px] grid-cols-2 divide-x divide-y divide-white/10 rounded-[16px] border border-white/10 tab:grid-cols-3">
          {PARTNERS.map((partner) => (
            <div key={partner} className="flex items-center justify-center px-4 py-7">
              <span className="font-raleway text-[15px] font-semibold tracking-[0.04em] text-white/50 uppercase tab:text-[17px]">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
