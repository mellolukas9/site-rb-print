"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-mark";
import { categoryIcons } from "@/components/catalog/product-art";
import { WhatsAppButton } from "@/components/catalog/whatsapp-button";
import { InstagramIcon } from "@/components/icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/data/catalog";
import { site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { MegaMenu } from "./mega-menu";
import { ProductSearch } from "./product-search";

export function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_var(--marca-linha)]">
      <div className="h-1 faixa-marca" aria-hidden="true" />
      <div className="relative z-40 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-3 px-4 py-3 sm:px-6 lg:grid-cols-[auto_minmax(0,36rem)_auto] lg:justify-between lg:gap-x-8">
          <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
            <SheetTrigger
              aria-label="Abrir menu de categorias"
              className="grid size-11 cursor-pointer place-items-center rounded-full text-tinta hover:bg-nevoa lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[86%] max-w-sm gap-0 overflow-y-auto p-0">
              <SheetHeader className="border-b border-border p-5">
                <SheetTitle className="font-heading text-xl font-extrabold">Categorias</SheetTitle>
                <SheetDescription>Escolha e peça no WhatsApp.</SheetDescription>
              </SheetHeader>
              <nav aria-label="Categorias">
                <ul className="p-3">
                  <li>
                    <Link
                      href="/#catalogo"
                      onClick={() => setDrawerOpen(false)}
                      className="flex h-12 items-center rounded-xl px-3 font-bold hover:bg-nevoa"
                    >
                      Todos os produtos
                    </Link>
                  </li>
                  {categories.map((c) => {
                    const Icon = categoryIcons[c.slug];
                    return (
                      <li key={c.slug}>
                        <Link
                          href={`/?categoria=${c.slug}#catalogo`}
                          onClick={() => setDrawerOpen(false)}
                          className="flex h-12 items-center gap-3 rounded-xl px-3 font-semibold hover:bg-nevoa"
                        >
                          <Icon className="size-5 text-ciano-texto" aria-hidden="true" />
                          {c.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border p-5">
                <WhatsAppButton href={whatsappUrl()}>Falar no WhatsApp</WhatsAppButton>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border font-bold hover:bg-nevoa"
                >
                  <InstagramIcon className="size-5" />
                  {site.instagram.handle}
                </a>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" aria-label="RB Print, página inicial" className="justify-self-start rounded-lg lg:col-start-1 lg:row-start-1">
            <BrandLogo />
          </Link>

          <WhatsAppButton
            href={whatsappUrl()}
            size="md"
            aria-label={`Falar no WhatsApp ${site.whatsapp.display} (abre em nova aba)`}
            className="w-12 px-0 sm:w-auto sm:px-5 lg:col-start-3"
          >
            <span className="hidden sm:inline">{site.whatsapp.display}</span>
          </WhatsAppButton>

          <ProductSearch className="col-span-3 lg:col-span-1 lg:col-start-2 lg:row-start-1" />
        </div>
      </div>
      <MegaMenu />
    </header>
  );
}
