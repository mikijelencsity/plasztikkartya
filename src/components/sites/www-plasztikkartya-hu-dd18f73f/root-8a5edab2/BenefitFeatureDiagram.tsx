import Image from "next/image";
import { CheckCircleIcon } from "../shared/icons";
import { benefits, IMAGES } from "./content";

const Y_POSITIONS = [18, 50, 82];

interface LabelProps {
  item: string;
  y: number;
  side: "left" | "right";
}

function Label({ item, y, side }: LabelProps) {
  return (
    <div
      className={`absolute w-[18%] -translate-y-1/2 font-helvetica text-[13px] leading-[18px] font-medium text-white ${
        side === "left" ? "left-0 pr-[4%] text-right" : "right-0 pl-[4%] text-left"
      }`}
      style={{ top: `${y}%` }}
    >
      {item}
    </div>
  );
}

/** Annotated product diagram: leader lines from the six benefits to the card image, instead of a checklist. */
export function BenefitFeatureDiagram() {
  const [leftItems, rightItems] = benefits.lists;

  return (
    <>
      {/* Desktop: annotated diagram with leader lines pointing at the card image. */}
      <div className="relative hidden w-full desk:block desk:px-[20%]">
        <Image
          src={`${IMAGES}/vip-card.webp`}
          alt=""
          width={1024}
          height={761}
          sizes="45vw"
          className="relative z-[1] h-auto w-full"
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {Y_POSITIONS.map((y) => (
            <line key={`l-${y}`} x1="2" y1={y} x2="20" y2={y} stroke="#aba37d" strokeWidth="0.3" />
          ))}
          {Y_POSITIONS.map((y) => (
            <line key={`r-${y}`} x1="80" y1={y} x2="98" y2={y} stroke="#aba37d" strokeWidth="0.3" />
          ))}
          {Y_POSITIONS.map((y) => (
            <circle key={`ld-${y}`} cx="20" cy={y} r="0.9" fill="#aba37d" />
          ))}
          {Y_POSITIONS.map((y) => (
            <circle key={`rd-${y}`} cx="80" cy={y} r="0.9" fill="#aba37d" />
          ))}
        </svg>
        {leftItems.map((item, index) => (
          <Label key={item} item={item} y={Y_POSITIONS[index]} side="left" />
        ))}
        {rightItems.map((item, index) => (
          <Label key={item} item={item} y={Y_POSITIONS[index]} side="right" />
        ))}
      </div>

      {/* Mobile/tablet: image with a simple two-column label grid underneath, no leader lines. */}
      <div className="flex w-full flex-col items-center gap-[25px] desk:hidden">
        <Image
          src={`${IMAGES}/vip-card.webp`}
          alt=""
          width={1024}
          height={761}
          sizes="100vw"
          className="h-auto w-full"
        />
        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-3">
          {[...leftItems, ...rightItems].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircleIcon className="size-4 shrink-0 text-pk-gold" />
              <span className="font-helvetica text-[14px] font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
