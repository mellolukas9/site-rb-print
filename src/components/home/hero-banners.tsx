import type { LucideIcon } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { WhatsAppButton } from "@/components/catalog/whatsapp-button";
import { categoryIcons } from "@/components/catalog/product-art";
import { whatsappOrderUrl } from "@/lib/whatsapp";

export interface HeroSlide {
  id: string;
  title: string;
  text: string;
  highlight: string;
  productName: string;
  icon: LucideIcon;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "camisas",
    title: "Camisas personalizadas",
    text: "Estampa em DTF com cores vivas e alta resistência. Pronta em até 3 dias úteis.",
    highlight: "Estampa DTF",
    productName: "Camisa personalizada em DTF",
    icon: categoryIcons.camisas,
  },
  {
    id: "canecas",
    title: "Canecas para todo presente",
    text: "Branca, com alça de coração, de vidro zero grau ou toda preta — do seu jeito.",
    highlight: "Impressão premium",
    productName: "Caneca personalizada",
    icon: categoryIcons.canecas,
  },
  {
    id: "cartoes",
    title: "Cartão de visita",
    text: "Papel couché premium, verniz ou fosco. A gente cria a arte e imprime.",
    highlight: "Criação + impressão",
    productName: "Cartão de visita",
    icon: categoryIcons.cartoes,
  },
  {
    id: "fotos",
    title: "Fotos reveladas na hora",
    text: "Do 3x4 pro documento ao 60x80 pra emoldurar. Qualidade que você vê e guarda.",
    highlight: "Feito na hora",
    productName: "Foto revelada",
    icon: categoryIcons.fotos,
  },
];

/** Marcas de corte nos quatro cantos, como numa prova de impressão. */
function CropMarks() {
  const corner = "absolute size-5 border-white/60";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -inset-3">
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${corner} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${corner} right-0 bottom-0 border-r-2 border-b-2`} />
    </span>
  );
}

export function HeroBanner({ slide, index }: { slide: HeroSlide; index: number }) {
  const HeadingTag = index === 0 ? "h1" : "h2";
  const Icon = slide.icon;
  return (
    <div className="relative isolate grid h-full items-center gap-8 overflow-hidden px-6 pt-10 pb-20 sm:px-10 md:grid-cols-[1.1fr_1fr] md:gap-10 md:py-12 lg:px-16">
      <BrandMark className="absolute -right-28 -bottom-44 -z-10 w-[26rem] opacity-90 md:-right-16 md:-bottom-28 md:w-[34rem]" />

      <div className="max-w-xl text-white">
        <p className="inline-flex -skew-x-6 rounded-md bg-amarelo px-3.5 py-1 text-sm font-extrabold text-tinta">{slide.highlight}</p>
        <HeadingTag className="mt-4 text-[2.4rem] font-extrabold uppercase sm:text-5xl lg:text-6xl">{slide.title}</HeadingTag>
        <p className="mt-4 max-w-md text-lg text-tinta-muted">{slide.text}</p>
        <WhatsAppButton href={whatsappOrderUrl(slide.productName)} size="lg" className="mt-7">
          Pedir no WhatsApp
        </WhatsAppButton>
      </div>

      <div className="relative mx-auto w-[min(78%,19rem)] rotate-2 md:w-[min(100%,20rem)] lg:w-[22rem]">
        <CropMarks />
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border-4 border-white shadow-[0_24px_60px_-20px_rgb(0_0_0/0.6)] faixa-marca">
          <Icon className="size-[42%] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]" strokeWidth={1.4} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
