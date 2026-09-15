import Image from "next/image";
import { IMAGES } from "./content";

const label =
  "mt-3 flex items-center justify-center gap-2 text-center font-helvetica text-[13px] font-medium tab:text-[15px]";

export function CardComparison() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 tab:gap-6">
      <div className="flex flex-col">
        <div className="flex aspect-[1.586/1] w-full flex-col justify-between rounded-[10px] border border-white/15 bg-[#f4f1ea] p-[6%] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]">
          <div className="h-[10%] w-[35%] rounded-[2px] bg-black/10" />
          <div className="flex flex-col gap-[6%]">
            <div className="h-[6%] w-[70%] rounded-[2px] bg-black/20" />
            <div className="h-[6%] w-[45%] rounded-[2px] bg-black/15" />
          </div>
        </div>
        <p className={label}>
          <span aria-hidden="true" className="text-white/30">
            ✕
          </span>
          <span className="text-white/50">Sima papírkártya</span>
        </p>
      </div>

      <div className="flex flex-col">
        <div className="overflow-hidden rounded-[10px]">
          <Image
            src={`${IMAGES}/hero-card.webp`}
            alt="Plasztikkártya"
            width={1536}
            height={1284}
            sizes="(min-width: 1051px) 30vw, 50vw"
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
