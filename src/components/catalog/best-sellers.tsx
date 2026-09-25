"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { popularProducts } from "@/data/catalog";
import { ProductCard } from "./product-card";

export function BestSellers() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: step * direction, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section aria-labelledby="mais-pedidos-titulo" className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:pt-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 id="mais-pedidos-titulo" className="text-2xl font-extrabold sm:text-3xl">
            Mais pedidos
          </h2>
          <p className="mt-1 text-muted-foreground">Os favoritos de quem já passou pelo nosso balcão.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Ver produtos anteriores"
            aria-controls="mais-pedidos-lista"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-border bg-white transition-colors hover:bg-nevoa"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Ver próximos produtos"
            aria-controls="mais-pedidos-lista"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-border bg-white transition-colors hover:bg-nevoa"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        id="mais-pedidos-lista"
        ref={trackRef}
        className="-mx-4 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scrollbar-none scroll-px-4 px-4 pb-4 sm:-mx-6 sm:scroll-px-6 sm:px-6"
      >
        {popularProducts.map((product) => (
          <li key={product.slug} className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]">
            <ProductCard product={product} idPrefix="mais-pedido" />
          </li>
        ))}
      </ul>
    </section>
  );
}
