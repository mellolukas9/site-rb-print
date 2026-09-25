import Image from "next/image";
import { getCategory } from "@/data/catalog";
import { formatPriceFrom, whatsappOrderUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/catalog";
import { ProductArt } from "./product-art";
import { WhatsAppButton } from "./whatsapp-button";

interface Props {
  product: Product;
  /** Prefixo do id âncora, para não duplicar ids quando o card aparece em duas seções */
  idPrefix?: string;
  /** Em telas < 480px vira card horizontal (foto ao lado), para listas longas */
  compactOnMobile?: boolean;
  className?: string;
}

export function ProductCard({ product, idPrefix = "produto", compactOnMobile = false, className }: Props) {
  const category = getCategory(product.category);
  const titleId = `${idPrefix}-${product.slug}-titulo`;

  return (
    <article
      id={`${idPrefix}-${product.slug}`}
      aria-labelledby={titleId}
      className={cn(
        "group h-full overflow-hidden rounded-(--product-card-radius) border border-border bg-card",
        "transition-shadow duration-(--dur-base) hover:shadow-[0_12px_32px_-12px_rgb(30_31_69/0.28)]",
        compactOnMobile ? "grid grid-cols-[7.5rem_1fr] min-[480px]:flex min-[480px]:flex-col" : "flex flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-(--product-card-media-bg)",
          compactOnMobile ? "min-h-full min-[480px]:aspect-square min-[480px]:min-h-0" : "aspect-square",
        )}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            fill
            loading="lazy"
            sizes={compactOnMobile ? "(min-width: 1280px) 280px, (min-width: 480px) 45vw, 120px" : "(min-width: 1280px) 280px, (min-width: 768px) 30vw, 80vw"}
            className="object-cover transition-transform duration-500 ease-(--ease-out) group-hover:scale-[1.04]"
          />
        ) : (
          <ProductArt category={product.category} />
        )}
        {product.badge && (
          <span
            className={cn(
              "absolute top-3 left-3 rounded-full bg-magenta-texto px-3 py-1 text-xs font-bold text-white",
              compactOnMobile && "max-[479px]:top-2 max-[479px]:left-2 max-[479px]:px-2 max-[479px]:text-[0.7rem]",
            )}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className={cn("flex flex-1 flex-col gap-1.5", compactOnMobile ? "p-3 min-[480px]:p-4" : "p-4")}>
        <p className="text-sm text-muted-foreground">{category.shortName}</p>
        <h3 id={titleId} className="text-lg font-bold">
          {product.name}
        </h3>
        <p className={cn("text-sm text-muted-foreground", compactOnMobile && "max-[479px]:line-clamp-2")}>{product.summary}</p>

        <div className="mt-auto pt-3">
          <p className="mb-3 flex items-baseline gap-1.5">
            {product.priceFrom !== undefined ? (
              <>
                <span className="text-sm text-muted-foreground">a partir de</span>
                <span className="font-heading text-2xl font-extrabold tabular-nums">
                  {formatPriceFrom(product.priceFrom)}
                </span>
              </>
            ) : (
              <span className="font-heading text-lg font-bold">Sob consulta</span>
            )}
          </p>
          <WhatsAppButton
            href={whatsappOrderUrl(product.name)}
            size="sm"
            className="w-full"
            aria-label={`Pedir ${product.name} no WhatsApp (abre em nova aba)`}
          >
            Pedir no WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
