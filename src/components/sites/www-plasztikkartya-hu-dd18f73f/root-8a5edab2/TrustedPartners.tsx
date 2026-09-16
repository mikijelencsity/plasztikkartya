import Image from "next/image";
import { IMAGES } from "./content";
import { boxedInner, responsivePadding, sectionHeading } from "./styles";

const PARTNERS_DIR = `${IMAGES}/partners`;

interface Partner {
  name: string;
  file: string;
  width: number;
  height: number;
}

const PARTNERS: Partner[] = [
  { name: "Antéus", file: "anteus.webp", width: 913, height: 240 },
  { name: "NISZ", file: "nisz.webp", width: 178, height: 240 },
  { name: "Jegymester", file: "jegymester.webp", width: 842, height: 240 },
  { name: "ASSA ABLOY", file: "assaabloy.webp", width: 1746, height: 240 },
  { name: "SWARCO", file: "swarco.webp", width: 1020, height: 240 },
  { name: "BudapestInfo", file: "budapestcard.webp", width: 1265, height: 240 },
];

export function TrustedPartners() {
  return (
    <section className={`w-full py-[70px] ${responsivePadding}`}>
      <div className={`${boxedInner} flex flex-col items-center gap-10`}>
        <h2 className={`${sectionHeading} text-center text-[32px] tab:text-[45px] desk:text-[64px]`}>
          Megbízható gyártópartner
        </h2>
        <div className="grid w-full max-w-[860px] grid-cols-2 gap-4 tab:grid-cols-3">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex h-[74px] items-center justify-center rounded-[14px] border border-white/10 bg-white px-6"
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
