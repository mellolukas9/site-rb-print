import { cn } from "@/lib/utils";

/**
 * As 4 tintas de processo (CMYK) do fundo do logo da RB Print, recriadas em CSS como anel.
 * Substituir pelo SVG oficial quando disponível.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block aspect-square shrink-0 rounded-full ring-marca mask-marca", className)}
    />
  );
}

/** Wordmark: "RB" em tinta + "Print" em magenta, como a assinatura usada nos posts da loja. */
export function BrandLogo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5 leading-none", className)}>
      <BrandMark className="size-8 sm:size-9" />
      <span className="flex flex-col">
        <span className="flex items-baseline font-heading text-[1.55rem] font-extrabold tracking-[-0.01em] sm:text-[1.7rem]">
          <span className={light ? "text-white" : "text-tinta"}>RB</span>
          <span className={light ? "text-white" : "text-magenta-texto"}>Print</span>
        </span>
        <span className={cn("mt-0.5 text-[0.72rem] font-semibold", light ? "text-tinta-muted" : "text-muted-foreground")}>
          a sua gráfica em Nilópolis
        </span>
      </span>
    </span>
  );
}
