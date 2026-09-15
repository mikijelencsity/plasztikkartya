import Image from "next/image";
import { cn } from "@/lib/utils";
import { ContactForm } from "./ContactForm";
import { contact, IMAGES } from "./content";
import { SiteFooter } from "./SiteFooter";
import { boxedInner, mutedText, responsivePadding, sectionHeading } from "./styles";

export function ContactSection() {
  return (
    <section
      className={cn(
        "w-full bg-[url(/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images/graphic-element-02.webp)] bg-[length:200px_auto] bg-bottom bg-no-repeat tab:bg-[length:400px_auto]",
        responsivePadding,
      )}
    >
      <div className={cn(boxedInner, "flex flex-col items-center")}>
        <Image
          src={`${IMAGES}/contact-image.webp`}
          alt=""
          width={1536}
          height={1024}
          sizes="(min-width: 1051px) 1024px, 500px"
          className="h-auto w-full max-w-[500px] desk:max-w-[1024px]"
        />
        <h2 id="contact" className={cn(sectionHeading, "scroll-mt-0 text-center desk:text-start")}>
          {contact.title}
        </h2>
        <p className={cn(mutedText, "mt-5 mb-[50px] w-[950px] max-w-full text-center")}>{contact.text}</p>
        <ContactForm className="w-full desk:mt-[10px] desk:w-[750px]" />
        <div className="my-[50px] w-full py-[15px]">
          <span className="block w-full border-t border-white/22" />
        </div>
        <SiteFooter className="mb-[100px] w-full desk:mb-[80px]" />
      </div>
    </section>
  );
}
