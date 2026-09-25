"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ProductArt } from "@/components/catalog/product-art";
import { WhatsAppButton } from "@/components/catalog/whatsapp-button";
import { categories, products } from "@/data/catalog";
import { formatPriceFrom, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/types/catalog";

/**
 * Mega menu por categoria (padrão da referência: abre no hover, painel sob a nav, overlay na página).
 * Também abre por clique/teclado; Esc fecha e devolve o foco.
 */
export function MegaMenu() {
  const [openSlug, setOpenSlug] = useState<CategorySlug | null>(null);
  const closeTimer = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenSlug(null), 160);
  };

  useEffect(() => {
    if (!openSlug) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const trigger = navRef.current?.querySelector<HTMLButtonElement>(`[data-trigger="${openSlug}"]`);
      setOpenSlug(null);
      trigger?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openSlug]);

  useEffect(() => cancelClose, []);

  const open = categories.find((c) => c.slug === openSlug);
  const openProducts = open ? products.filter((p) => p.category === open.slug) : [];

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Categorias"
        className="relative z-40 hidden border-t border-border bg-white lg:block"
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
        onBlur={(e) => {
          if (!navRef.current?.contains(e.relatedTarget)) setOpenSlug(null);
        }}
      >
        <ul className="mx-auto flex max-w-7xl items-center gap-1 px-6">
          <li>
            <Link
              href="/#catalogo"
              className="flex h-12 items-center rounded-t-lg px-3 font-bold text-tinta hover:text-ciano-texto"
              onMouseEnter={() => setOpenSlug(null)}
            >
              Todos os produtos
            </Link>
          </li>
          {categories.map((category) => {
            const isOpen = openSlug === category.slug;
            return (
              <li key={category.slug}>
                <button
                  type="button"
                  data-trigger={category.slug}
                  aria-expanded={isOpen}
                  aria-controls="mega-painel"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenSlug(category.slug);
                  }}
                  onClick={() => setOpenSlug(isOpen ? null : category.slug)}
                  className={cn(
                    "relative flex h-12 cursor-pointer items-center gap-1 rounded-t-lg px-3 font-semibold transition-colors duration-(--dur-fast)",
                    isOpen ? "text-tinta" : "text-muted-foreground hover:text-tinta",
                  )}
                >
                  {category.shortName}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("size-4 transition-transform duration-(--dur-fast)", isOpen && "rotate-180")}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 bottom-0 h-[3px] origin-left rounded-full faixa-marca transition-transform duration-(--dur-base)",
                      isOpen ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {open && (
          <div
            id="mega-painel"
            className="absolute inset-x-0 top-full border-t border-border bg-white shadow-[0_24px_48px_-24px_rgb(30_31_69/0.35)] animate-in fade-in-0 slide-in-from-top-1 duration-200"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-[1.2fr_1fr_16rem] gap-10 px-6 py-8">
              <div>
                <p className="font-heading text-xl font-extrabold">{open.name}</p>
                <ul className="mt-4 grid grid-cols-1 gap-1">
                  {openProducts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/?categoria=${p.category}#produto-${p.slug}`}
                        onClick={() => setOpenSlug(null)}
                        className="flex items-baseline justify-between gap-4 rounded-lg px-3 py-2 hover:bg-nevoa"
                      >
                        <span className="font-semibold">{p.name}</span>
                        <span className="shrink-0 text-sm text-muted-foreground">{formatPriceFrom(p.priceFrom)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between gap-6 border-l border-border pl-10">
                <p className="text-lg text-muted-foreground">{open.description}</p>
                <div className="flex flex-col items-start gap-3">
                  <Link
                    href={`/?categoria=${open.slug}#catalogo`}
                    onClick={() => setOpenSlug(null)}
                    className="font-bold text-ciano-texto underline underline-offset-4 hover:no-underline"
                  >
                    Ver todos em {open.shortName}
                  </Link>
                  <WhatsAppButton href={whatsappUrl(`Olá! Vim pelo site e quero um orçamento de ${open.name.toLowerCase()}.`)} size="sm">
                    Pedir no WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-nevoa">
                {open.image ? (
                  <Image src={open.image} alt="" fill sizes="256px" className="object-cover" />
                ) : (
                  <ProductArt category={open.slug} />
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay que escurece a página enquanto o painel está aberto */}
      <div
        aria-hidden="true"
        onMouseEnter={scheduleClose}
        onClick={() => setOpenSlug(null)}
        className={cn(
          "fixed inset-0 z-30 hidden bg-tinta/40 transition-opacity duration-(--dur-base) lg:block",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
    </>
  );
}
