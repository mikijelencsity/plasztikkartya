import Image from "next/image";
import { IMAGES } from "./content";
import { boxedInner, responsivePadding } from "./styles";

const PARTNERS_DIR = `${IMAGES}/partners`;

interface Partner {
  name: string;
  file: string;
  width: number;
  height: number;
  onChip: boolean;
}

const PARTNERS: Partner[] = [
  { name: "Antéus", file: "anteus.webp", width: 913, height: 240, onChip: true },
  { name: "NISZ", file: "nisz.webp", width: 178, height: 240, onChip: false },
  { name: "Jegymester", file: "jegymester.webp", width: 842, height: 240, onChip: true },
  { name: "ASSA ABLOY", file: "assaabloy.webp", width: 1746, height: 240, onChip: true },
  { name: "SWARCO", file: "swarco.webp", width: 1020, height: 240, onChip: false },
  { name: "BudapestInfo", file: "budapestcard.webp", width: 1265, height: 240, onChip: false },
];

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
        <div className="grid w-full max-w-[860px] grid-cols-2 gap-4 tab:grid-cols-3">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className={`flex h-[74px] items-center justify-center rounded-[14px] border border-white/10 px-6 ${
                partner.onChip ? "bg-white" : "bg-white/[0.04]"
              }`}
            >
              <Image
                src={`${PARTNERS_DIR}/${partner.file}`}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-[26px] w-auto object-contain tab:h-[30px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
