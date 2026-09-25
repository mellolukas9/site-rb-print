import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-mark";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { categories } from "@/data/catalog";
import { site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

const linkClass = "inline-flex min-h-11 items-center text-tinta-muted underline-offset-4 hover:text-white hover:underline";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-tinta text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo tone="light" />
          <p className="mt-4 max-w-xs text-tinta-muted">
            Gráfica rápida no Centro de Nilópolis há {site.yearsInBusiness} anos. {site.googleRating.value}★
            no Google ({site.googleRating.count} avaliações).
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold">Visite a loja</h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-amarelo" aria-hidden="true" />
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {site.address.street}, {site.address.district}, {site.address.city}
              </a>
            </li>
            {site.address.reference ? (
              <li className="pl-6.5 text-tinta-muted">{site.address.reference}</li>
            ) : null}
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-amarelo" aria-hidden="true" />
              {site.hours.length > 0 ? (
                <span className="text-tinta-muted">
                  {site.hours.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              ) : (
                <span className="text-tinta-muted">Confirme o horário de atendimento pelo WhatsApp.</span>
              )}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold">Fale com a gente</h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`gap-2.5 ${linkClass}`}>
                <WhatsAppIcon className="size-4 text-amarelo" />
                {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className={`gap-2.5 ${linkClass}`}>
                <InstagramIcon className="size-4 text-amarelo" />
                Instagram {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Categorias no rodapé">
          <h2 className="font-heading text-lg font-bold">Produtos</h2>
          <ul className="mt-4 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/?categoria=${c.slug}#catalogo`} className={linkClass}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 pb-24 text-sm text-tinta-muted sm:px-6 lg:pb-5">
          © {new Date().getFullYear()} {site.name}. Pedidos e orçamentos pelo WhatsApp.
        </p>
      </div>
    </footer>
  );
}
