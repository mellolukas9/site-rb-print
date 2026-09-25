import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/catalog";
import { ProductArt } from "./product-art";

export function CategoryCircles() {
  return (
    <section aria-labelledby="categorias-titulo" className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:pt-16">
      <h2 id="categorias-titulo" className="text-2xl font-extrabold sm:text-3xl">
        O que você quer personalizar?
      </h2>

      <ul className="-mx-4 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scrollbar-none scroll-px-4 px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-y-8 sm:overflow-visible sm:px-0 lg:grid-cols-7">
        {categories.map((category) => (
          <li key={category.slug} className="shrink-0 snap-start">
            <Link
              href={`/?categoria=${category.slug}#catalogo`}
              className="group flex w-28 flex-col items-center gap-3 rounded-2xl text-center sm:w-auto"
            >
              <span className="relative block size-28 rounded-full p-(--category-ring-width) ring-marca transition-transform duration-(--dur-base) ease-(--ease-out) group-hover:rotate-6 sm:size-32 lg:size-32 xl:size-36">
                <span className="relative block size-full overflow-hidden rounded-full border-[3px] border-white bg-nevoa">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      sizes="144px"
                      className="object-cover transition-transform duration-500 ease-(--ease-out) group-hover:-rotate-6 group-hover:scale-110"
                    />
                  ) : (
                    <ProductArt category={category.slug} />
                  )}
                </span>
              </span>
              <span className="font-bold leading-tight group-hover:underline group-hover:underline-offset-4">
                {category.shortName}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
