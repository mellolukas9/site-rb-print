export type CategorySlug =
  | "fotos"
  | "canecas"
  | "camisas"
  | "azulejos"
  | "cartoes"
  | "banners"
  | "adesivos"
  | "copias";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Nome curto para o círculo e o menu */
  shortName: string;
  description: string;
  /** Foto real do feed; se ausente, usa a arte da marca */
  image?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  summary: string;
  /** Preço inicial em reais; `undefined` = "Sob consulta" */
  priceFrom?: number;
  image?: string;
  imageAlt?: string;
  /** Aparece na vitrine "Mais pedidos" */
  popular?: boolean;
  badge?: string;
  /** Termos extras para a busca */
  keywords?: string[];
}
