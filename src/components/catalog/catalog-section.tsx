"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { categories, isCategorySlug, products, searchProducts } from "@/data/catalog";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/types/catalog";
import { ProductCard } from "./product-card";
import { WhatsAppButton } from "./whatsapp-button";

interface ViewProps {
  category: CategorySlug | null;
  query: string;
  onCategoryChange?: (slug: CategorySlug | null) => void;
  onClearQuery?: () => void;
}

/** Catálogo com filtro por categoria. A URL guarda o estado (?categoria=&busca=) para poder compartilhar. */
export function CatalogSection() {
  const router = useRouter();
  const params = useSearchParams();
  const rawCategory = params.get("categoria");
  const category = isCategorySlug(rawCategory) ? rawCategory : null;
  const query = params.get("busca") ?? "";

  // Links diretos (/?categoria=x#catalogo, #produto-y): a seção é trocada na hidratação e o salto
  // nativo do navegador para a âncora se perde. Refazemos uma vez, ao montar.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id === "catalogo" || id.startsWith("produto-")) {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }
    // No celular a fileira de filtros rola na horizontal: mostra o filtro ativo
    const chip = document.querySelector<HTMLElement>("#catalogo [aria-pressed=true]");
    const row = chip?.parentElement;
    if (chip && row) row.scrollLeft += chip.getBoundingClientRect().left - row.getBoundingClientRect().left - 16;
  }, []);

  const update =(next: { categoria?: string | null; busca?: string | null }) => {
    const sp = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(next)) {
      if (value) sp.set(key, value);
      else sp.delete(key);
    }
    const qs = sp.toString();
    router.replace(qs ? `/?${qs}#catalogo` : "/#catalogo", { scroll: false });
  };

  return (
    <CatalogView
      category={category}
      query={query}
      onCategoryChange={(slug) => update({ categoria: slug })}
      onClearQuery={() => update({ busca: null })}
    />
  );
}

export function CatalogView({ category, query, onCategoryChange, onClearQuery }: ViewProps) {
  const byCategory = category ? products.filter((p) => p.category === category) : products;
  const visible = searchProducts(query, byCategory);
  const chips: { slug: CategorySlug | null; label: string }[] = [
    { slug: null, label: "Todos" },
    ...categories.map((c) => ({ slug: c.slug, label: c.shortName })),
  ];

  return (
    <section id="catalogo" aria-labelledby="catalogo-titulo" className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:pt-20">
      <h2 id="catalogo-titulo" className="text-2xl font-extrabold sm:text-3xl">
        Catálogo
      </h2>
      <p className="mt-1 text-muted-foreground">Escolha o produto e peça o orçamento direto no WhatsApp.</p>

      <div role="group" aria-label="Filtrar por categoria" className="-mx-4 mt-6 flex gap-2 overflow-x-auto scrollbar-none px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {chips.map((chip) => {
          const active = chip.slug === category;
          return (
            <button
              key={chip.label}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange?.(chip.slug)}
              className={cn(
                "h-11 shrink-0 cursor-pointer rounded-full border px-5 text-sm font-bold transition-colors duration-(--dur-fast)",
                active
                  ? "border-transparent bg-(--chip-active-bg) text-(--chip-active-fg)"
                  : "border-border bg-white text-tinta hover:border-tinta",
              )}
            >
              {chip.label}
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="mt-5 flex min-h-8 flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>
          {visible.length} {visible.length === 1 ? "produto" : "produtos"}
          {query && (
            <>
              {" "}para <strong className="text-tinta">“{query}”</strong>
            </>
          )}
        </span>
        {query && (
          <button
            type="button"
            onClick={onClearQuery}
            className="inline-flex h-8 cursor-pointer items-center gap-1 rounded-full bg-nevoa px-3 font-bold text-tinta hover:bg-border"
          >
            <X className="size-4" aria-hidden="true" />
            Limpar busca
          </button>
        )}
      </div>

      {visible.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} compactOnMobile />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-border bg-nevoa px-6 py-10 text-center">
          <p className="font-heading text-xl font-bold">Não achou o que procura?</p>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            A gente personaliza muito mais do que cabe aqui. Conta a sua ideia no WhatsApp.
          </p>
          <WhatsAppButton
            href={whatsappUrl(`Olá! Vim pelo site e procuro ${query || "um produto personalizado"}. Vocês fazem?`)}
            className="mt-5"
          >
            Perguntar no WhatsApp
          </WhatsAppButton>
        </div>
      )}
    </section>
  );
}
