import { MapPin, Star } from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { InstagramIcon } from "@/components/icons";
import { site } from "@/lib/site";

const stats = [
  { value: `${site.yearsInBusiness} anos`, label: "de gráfica no Centro de Nilópolis" },
  { value: `${site.googleRating.value}★`, label: `no Google (${site.googleRating.count} avaliações)` },
  { value: "Feito na hora", label: "cópias, adesivos, fotos 3x4 e revelação" },
];

export function AboutSection() {
  return (
    <section aria-labelledby="sobre-titulo" className="relative mt-16 overflow-hidden bg-tinta text-white lg:mt-24">
      <BrandMark className="pointer-events-none absolute -top-24 -right-24 w-[24rem] opacity-20 md:w-[30rem]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-20">
        <div className="flex flex-col">
          <h2 id="sobre-titulo" className="text-3xl font-extrabold uppercase sm:text-4xl">
            {site.yearsInBusiness} anos imprimindo ideias em Nilópolis
          </h2>
          <p className="mt-5 max-w-prose text-lg text-tinta-muted">
            Da foto revelada ao cartão de visita, da caneca personalizada ao banner da sua loja: cada
            pedido é uma história, e a gente cuida de tudo, do design à produção, com agilidade e
            qualidade que você vê e guarda.
          </p>

          <address className="mt-8 flex items-start gap-3 not-italic">
            <MapPin className="mt-1 size-5 shrink-0 text-amarelo" aria-hidden="true" />
            <span>
              {site.address.street}
              <br />
              {site.address.district}, {site.address.city}
              <br />
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-bold text-white underline underline-offset-4 hover:text-amarelo"
              >
                Ver no mapa
              </a>
            </span>
          </address>

          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 w-fit items-center gap-2.5 rounded-full border-2 border-white/25 px-5 font-bold transition-colors hover:border-white"
          >
            <InstagramIcon className="size-5" />
            Mais trabalhos no Instagram
          </a>
        </div>

        <dl className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex items-baseline gap-2 font-heading text-2xl font-extrabold sm:text-3xl">
                {stat.value.endsWith("★") ? <Star className="size-6 fill-amarelo text-amarelo" aria-hidden="true" /> : null}
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-tinta-muted">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
