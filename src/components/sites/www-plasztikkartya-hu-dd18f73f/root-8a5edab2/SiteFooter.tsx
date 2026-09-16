import Image from "next/image";
import { cn } from "@/lib/utils";
import { footer, IMAGES } from "./content";

const contactLabel = "font-nunito text-[17px] leading-[25.5px] font-normal text-pk-gold";
const contactLink =
  "mt-[10px] mb-[50px] font-raleway text-[28px] leading-[35px] font-medium text-white transition-colors duration-300 hover:text-pk-gold tab:text-[40px]";

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn("flex flex-col-reverse desk:flex-row desk:items-start desk:gap-x-[50px]", className)}>
      <div className="flex w-full flex-col items-start">
        <div className="h-[26px]">
          <Image
            src={`${IMAGES}/logo-plasztikkartya.svg`}
            alt=""
            width={193}
            height={22}
            unoptimized
            className="h-[22px] w-[193px]"
          />
        </div>
        <p className="mt-[30px] mb-[25px] w-full font-raleway text-[16px] leading-[30px] font-normal text-white/40 tab:leading-[35px] desk:w-[650px] desk:max-w-full desk:text-[18px]">
          {footer.text}
        </p>
        <ul className="flex w-full flex-col gap-[10px] font-raleway text-[15px] leading-[1.5] font-normal text-white/40">
          <li>{footer.copyright}</li>
          <li>
            <a href={footer.privacyHref}>{footer.privacyLabel}</a>
          </li>
        </ul>
      </div>

      <div className="flex w-full flex-col items-start desk:items-end">
        <div className="flex flex-col items-start tab:w-fit">
          <p className={cn(contactLabel, "mt-[5px]")}>{footer.phoneLabel}</p>
          <a href={footer.phoneHref} className={cn(contactLink, "notranslate")}>
            {footer.phone}
          </a>
          <p className={cn(contactLabel, "-mt-[25px] tab:mt-0")}>{footer.emailLabel}</p>
          <a href={`mailto:${footer.email}`} className={cn(contactLink, "notranslate underline")}>
            {footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
