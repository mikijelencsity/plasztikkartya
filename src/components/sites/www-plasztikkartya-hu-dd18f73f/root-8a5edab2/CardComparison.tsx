import Image from "next/image";
import { IMAGES } from "./content";

const label =
  "mt-3 flex items-center justify-center gap-2 text-center font-raleway text-[13px] font-medium tab:text-[15px]";

export function CardComparison() {
  return (
    <div className="flex w-full max-w-[380px] flex-col gap-8 desk:max-w-none desk:flex-row desk:items-start desk:gap-10">
      <div className="flex flex-col desk:flex-1">
        <div className="relative left-[27px] w-full desk:left-0">
          <Image
            src={`${IMAGES}/paper-card-hand.webp`}
            alt="Sima papírkártya"
            width={1233}
            height={1138}
            sizes="(min-width: 65.6875rem) 50vw, 380px"
            className="h-auto w-full"
          />
        </div>
        <p className={label}>
          <span aria-hidden="true" className="text-white/30">
            ✕
          </span>
          <span className="text-white/50">Sima papírkártya</span>
        </p>
      </div>

      <div className="flex flex-col desk:flex-1">
        <div className="relative left-[-120px] w-[130%] max-w-none desk:left-0 desk:w-full">
          <Image
            src={`${IMAGES}/plastic-card-hand.webp`}
            alt="Plasztikkártya"
            width={1175}
            height={797}
            sizes="(min-width: 65.6875rem) 50vw, 380px"
            className="h-auto w-full"
          />
        </div>
        <p className={label}>
          <span aria-hidden="true" className="text-pk-gold">
            ✓
          </span>
          <span className="text-white">Plasztikkártya</span>
        </p>
      </div>
    </div>
  );
}
