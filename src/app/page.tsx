import { Suspense } from "react";
import { BestSellers } from "@/components/catalog/best-sellers";
import { CatalogSection, CatalogView } from "@/components/catalog/catalog-section";
import { CategoryCircles } from "@/components/catalog/category-circles";
import { AboutSection } from "@/components/home/about-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="flex-1">
        <HeroCarousel />
        <CategoryCircles />
        <BestSellers />
        <Suspense fallback={<CatalogView category={null} query="" />}>
          <CatalogSection />
        </Suspense>
        <AboutSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
