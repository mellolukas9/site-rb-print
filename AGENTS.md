<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# RB Print — catálogo

Catálogo/vitrine da RB Print (gráfica rápida, Centro de Nilópolis/RJ, há 20 anos). Estrutura derivada do
projeto site-nova-grafica. **Não é e-commerce:** sem carrinho, checkout ou sessão. Todo CTA leva ao
WhatsApp via `wa.me` com mensagem "Olá! Vim pelo site e quero um orçamento de [produto]".

## Tech Stack
- Next.js 16 (App Router, React 19, TS strict) · Tailwind v4 · shadcn/ui (base-nova, Base UI) · Lucide
- Fontes: Poppins 800 (títulos) + Inter (texto) via next/font
- Página única estática (`/`); filtro e busca vivem na URL (`?categoria=&busca=`)
- Deploy: GitHub Pages via `output: "export"` + `basePath` de `NEXT_PUBLIC_BASE_PATH` (`/site-rb-print` no CI). URL: https://mellolukas9.github.io/site-rb-print/

## Onde mexer
- **Produtos/categorias/preços:** `src/data/catalog.ts` (nenhum preço divulgado → tudo "Sob consulta"; sem `image` = arte da marca)
- **Contato, endereço, horário, links:** `src/lib/site.ts` (sem ponto de referência e sem Facebook confirmados — TODO(cliente))
- **Banners do carrossel:** `src/components/home/hero-banners.tsx` (usa ícone + faixa CMYK, não fotos — ver "Fotos" abaixo)
- **Tokens:** `src/app/globals.css` (primitivos `--marca-*` → semânticos shadcn → componente)
- **Marca/voz:** `docs/brand-guidelines.md`
- Fatos da marca: `docs/research/RBPRINT_FACTS.md`

## Commands
- `npm run dev` · `npm run build` · `npm run lint` · `npm run typecheck` · `npm run check`

## Regras
- Verde WhatsApp (#0F7A3D) só em CTAs de pedido; amarelo (#FFD400) nunca como texto sobre branco, só sobre tinta/preto; faixa CMYK sempre em faixas duras, nunca degradê
- Rótulo do CTA é sempre "Pedir no WhatsApp"
- Contraste AA, alvos ≥ 44px, alt text descritivo em fotos de produto, `prefers-reduced-motion` respeitado
- Imagens: `images.unoptimized` (Pages não otimiza). Fotos em WebP via `node scripts/optimize-images.mjs`; caminhos de /public sempre com `asset()` (`src/lib/asset.ts`) — `<Link>`/router já aplicam o basePath
- Next 16: usar `loading`/`fetchPriority` em vez de `priority`
- Build local com basePath no Git Bash: `MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/site-rb-print npm run build`

## Fotos
Não há fotografia de produto em boa resolução disponível (o Instagram do cliente é majoritariamente arte
de divulgação, não fotos limpas). Por isso hero, categorias e a maioria dos produtos usam o fallback de
ícone + `BrandMark` (`ProductArt`) em vez de `<Image>`. Quando o cliente enviar fotos reais, salve em
`public/images/produtos/`, rode `scripts/optimize-images.mjs` e adicione `image`/`imageAlt` no produto
correspondente em `src/data/catalog.ts`.
