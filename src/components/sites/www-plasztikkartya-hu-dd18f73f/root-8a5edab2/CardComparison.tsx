import Image from "next/image";
import { IMAGES } from "./content";

const label =
  "mt-3 flex items-center justify-center gap-2 text-center font-raleway text-[13px] font-medium tab:text-[15px]";

export function CardComparison() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 tab:gap-6">
      <div className="flex flex-col">
        <div className="aspect-square w-full overflow-hidden rounded-[10px]">
          <Image
            src={`${IMAGES}/paper-card-hand.webp`}
            alt="Sima papírkártya"
            width={1254}
            height={1254}
            sizes="(min-width: 1051px) 30vw, 50vw"
            className="h-full w-full object-cover"
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
        <div className="aspect-square w-full overflow-hidden rounded-[10px]">
          <Image
            src={`${IMAGES}/plastic-card-hand.webp`}
            alt="Plasztikkártya"
            width={1254}
            height={1254}
            sizes="(min-width: 1051px) 30vw, 50vw"
            className="h-full w-full object-cover"
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
