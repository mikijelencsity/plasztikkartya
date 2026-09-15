import Image from "next/image";
import { benefits, IMAGES } from "./content";

const ANGLES = [-75, -45, -15, 15, 45, 75];

const ARROW_CLIP =
  "polygon(50% 0%, 100% 38%, 76% 38%, 76% 100%, 24% 100%, 24% 38%, 0% 38%)";

interface ArrowProps {
  label: string;
  angle: number;
}

function Arrow({ label, angle }: ArrowProps) {
  return (
    <div
      className="absolute bottom-full left-1/2 origin-bottom"
      style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
    >
      <div
        className="flex h-[70px] w-[92px] -translate-y-[70px] items-start justify-center bg-gradient-to-b from-white via-white/95 to-pk-gold pt-[24px] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.6)] tab:h-[100px] tab:w-[130px] tab:pt-[34px]"
        style={{ clipPath: ARROW_CLIP }}
      >
        <span
          className="block w-[70%] text-center font-helvetica text-[9px] leading-[1.15] font-bold text-pk-navy tab:text-[12px]"
          style={{ transform: `rotate(${-angle}deg)` }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/** Six benefits as arrows fanning out from the card, instead of a checklist. */
export function BenefitFeatureDiagram() {
  const items = benefits.lists.flat();

  return (
    <div className="relative flex w-full flex-col items-center pt-[90px] tab:pt-[130px]">
      <div className="relative w-full max-w-[420px] tab:max-w-[520px]">
        {items.map((item, index) => (
          <Arrow key={item} label={item} angle={ANGLES[index]} />
        ))}
        <Image
          src={`${IMAGES}/vip-card.webp`}
          alt=""
          width={1024}
          height={761}
          sizes="(min-width: 1051px) 40vw, 90vw"
          className="relative z-[1] h-auto w-full"
        />
      </div>
    </div>
  );
}
