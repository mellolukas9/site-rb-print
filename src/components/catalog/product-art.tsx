import { Camera, Coffee, Copy, Grid2x2, IdCard, Presentation, Shirt, Sticker } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/types/catalog";

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  fotos: Camera,
  canecas: Coffee,
  camisas: Shirt,
  azulejos: Grid2x2,
  cartoes: IdCard,
  banners: Presentation,
  adesivos: Sticker,
  copias: Copy,
};

/**
 * Arte da marca para produtos que ainda não têm foto.
 * Decorativa: o nome do produto já aparece no card.
 */
export function ProductArt({ category, className }: { category: CategorySlug; className?: string }) {
  const Icon = categoryIcons[category];
  return (
    <div aria-hidden="true" className={cn("relative grid size-full place-items-center overflow-hidden bg-tinta", className)}>
      <BrandMark className="absolute -right-[18%] -bottom-[22%] w-[78%] opacity-90" />
      <Icon className="relative size-[34%] text-white" strokeWidth={1.4} />
    </div>
  );
}
