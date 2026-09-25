"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { getCategory, searchProducts } from "@/data/catalog";
import { cn } from "@/lib/utils";

/** Busca simples: sugestões enquanto digita; Enter filtra o catálogo (?busca=). */
export function ProductSearch({ className }: { className?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputId = useId();
  const listId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const suggestions = query.trim().length >= 2 ? searchProducts(query).slice(0, 5) : [];
  const showList = open && query.trim().length >= 2;

  return (
    <div
      ref={wrapperRef}
      className={cn("relative", className)}
      onBlur={(e) => {
        if (!wrapperRef.current?.contains(e.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          const q = query.trim();
          setOpen(false);
          router.push(q ? `/?busca=${encodeURIComponent(q)}#catalogo` : "/#catalogo");
        }}
      >
        <label htmlFor={inputId} className="sr-only">
          Buscar produto
        </label>
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Buscar cartão, camisa, banner…"
          autoComplete="off"
          aria-controls={showList ? listId : undefined}
          className="h-12 w-full rounded-full border-2 border-border bg-nevoa pr-14 pl-5 text-base text-tinta placeholder:text-muted-foreground focus:border-ciano-texto focus:bg-white focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="absolute top-1 right-1 grid size-10 cursor-pointer place-items-center rounded-full bg-tinta text-white transition-colors hover:bg-tinta-soft"
        >
          <Search className="size-[1.1rem]" aria-hidden="true" />
        </button>
      </form>

      {showList && (
        <div
          id={listId}
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_40px_-12px_rgb(30_31_69/0.3)]"
        >
          <p className="sr-only" aria-live="polite">
            {suggestions.length} {suggestions.length === 1 ? "sugestão" : "sugestões"}
          </p>
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/?categoria=${p.category}#produto-${p.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex flex-col px-5 py-3 hover:bg-nevoa focus-visible:bg-nevoa"
                  >
                    <span className="font-bold">{p.name}</span>
                    <span className="text-sm text-muted-foreground">{getCategory(p.category).shortName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-5 py-4 text-sm text-muted-foreground">
              Nada com esse nome ainda. Aperte Enter ou pergunte no WhatsApp — a gente personaliza muita coisa.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
