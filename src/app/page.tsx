import { BackToTop } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/BackToTop";
import { CardTypesSection } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/CardTypesSection";
import { ContactSection } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactSection";
import { HeroSection } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/HeroSection";
import { IntroSection } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/IntroSection";
import { SiteHeader } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/SiteHeader";
import { TestimonialsSection } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/TestimonialsSection";
import { WhyUsReveal } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/WhyUsReveal";

export default function Home() {
  return (
    <>
      <div className="isolate mx-auto flex w-full max-w-[2000px] animate-pk-fade-in flex-col items-center overflow-hidden bg-pk-navy font-raleway">
        <SiteHeader />
        <main className="flex w-full flex-col gap-5 desk:mt-[75px]">
          <HeroSection />
          <IntroSection />
          <CardTypesSection />
          <WhyUsReveal />
          <TestimonialsSection />
          <ContactSection />
        </main>
      </div>
      <BackToTop />
    </>
  );
}
