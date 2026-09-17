import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./ButtonLink";
import { IMAGES } from "./content";
import { responsivePadding } from "./styles";

export function SiteHeader() {
  return (
    <header className={cn("mt-[25px] flex w-full items-center justify-between gap-4 tab:mt-[35px]", responsivePadding)}>
      <Link href="/" aria-label="Plasztikkártya gyártás" className="block shrink">
        <Image
          src={`${IMAGES}/logo-plasztikkartya.svg`}
          alt=""
          width={193}
          height={22}
          unoptimized
          priority
          className="h-auto w-[193px] max-w-full"
        />
      </Link>
      <ButtonLink
        href="/#contact"
        className="bg-pk-gold-dark shrink-0 px-[25px] pt-[19px] pb-[17px] text-[16px] tab:px-[40px] tab:text-[20px]"
      >
        Megrendelés
      </ButtonLink>
    </header>
  );
}
