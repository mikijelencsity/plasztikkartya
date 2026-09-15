import Image from "next/image";
import { IMAGES } from "./content";

const label =
  "mt-3 flex items-center justify-center gap-2 text-center font-helvetica text-[13px] font-medium tab:text-[15px]";

export function CardComparison() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 tab:gap-6">
      <div className="flex flex-col">
        <div className="aspect-[1.586/1] w-full overflow-hidden rounded-[10px]">
          <Image
            src={`${IMAGES}/paper-card.png`}
            alt="Sima papírkártya"
            width={700}
            height={441}
            sizes="(min-width: 1051px) 45vw, 50vw"
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
        <div className="aspect-[1.586/1] w-full overflow-hidden rounded-[10px] bg-pk-navy">
          <Image
            src={`${IMAGES}/hero-card.webp`}
            alt="Plasztikkártya"
            width={1536}
            height={1284}
            sizes="(min-width: 1051px) 30vw, 50vw"
            className="h-full w-full object-contain"
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
