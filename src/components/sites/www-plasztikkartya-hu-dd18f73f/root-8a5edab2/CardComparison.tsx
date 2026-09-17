import Image from "next/image";
import { IMAGES } from "./content";

const label =
  "mt-3 flex items-center justify-center gap-2 text-center font-raleway text-[13px] font-medium tab:text-[15px]";

export function CardComparison() {
  return (
    <div className="flex w-full max-w-[380px] flex-col gap-8">
      <div className="flex flex-col">
        <div className="relative left-[-60px] w-full tab:left-[20px]">
          <Image
            src={`${IMAGES}/paper-card-hand.webp`}
            alt="Sima papírkártya"
            width={1233}
            height={1138}
            sizes="380px"
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

      <div className="flex flex-col">
        <div className="relative left-[-280px] w-[160%] max-w-none tab:left-0 tab:w-full">
          <Image
            src={`${IMAGES}/plastic-card-hand.webp`}
            alt="Plasztikkártya"
            width={1175}
            height={797}
            sizes="380px"
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
