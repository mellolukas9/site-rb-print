import { site } from "@/lib/site";

/** Link wa.me com a mensagem de orçamento pré-preenchida. */
export function whatsappOrderUrl(productName: string): string {
  const text = `Olá! Vim pelo site e quero um orçamento de ${productName}`;
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

/** Link wa.me genérico (header, botão flutuante). */
export function whatsappUrl(text = "Olá! Vim pelo site da RB Print e quero fazer um orçamento."): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function formatPriceFrom(value?: number): string {
  if (value === undefined) return "Sob consulta";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
