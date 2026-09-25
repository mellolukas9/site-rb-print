import type { NextConfig } from "next";

// Em produção (GitHub Pages) o site é servido em /site-rb-print; em dev fica na raiz.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Site 100% estático: `npm run build` gera a pasta out/
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages não roda o otimizador do Next; as fotos já são WebP (scripts/optimize-images.mjs)
    unoptimized: true,
  },
};

export default nextConfig;
