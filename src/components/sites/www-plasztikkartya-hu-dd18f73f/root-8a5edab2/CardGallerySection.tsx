import { cn } from "@/lib/utils";
import { CardGallery } from "./CardGallery";
import { responsivePadding } from "./styles";

export function CardGallerySection() {
  return (
    <section className={cn("mt-[50px] w-full tab:mt-0 desk:mt-[100px]", responsivePadding)}>
      <div className="w-full tab:mt-[100px] desk:mt-0">
        <CardGallery />
      </div>
    </section>
  );
}
