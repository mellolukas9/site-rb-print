/**
 * Prefixa arquivos de /public com o basePath do deploy (GitHub Pages serve em /site-nova-grafica).
 * `<Link>` e o router já aplicam o basePath sozinhos; `<Image unoptimized>` e metadados não.
 */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
