# RB Print — catálogo

Catálogo online da **RB Print**, gráfica rápida no Centro de Nilópolis/RJ há 20 anos.
Sem carrinho: o cliente escolhe o produto e clica em **Pedir no WhatsApp**, que abre a conversa com a mensagem pronta.

**Site:** https://mellolukas9.github.io/site-rb-print/

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

## Editar conteúdo

| O quê | Onde |
|---|---|
| Produtos, categorias e preços | `src/data/catalog.ts` |
| WhatsApp, endereço, horário, Instagram | `src/lib/site.ts` |
| Banners do carrossel | `src/components/home/hero-banners.tsx` |
| Cores, fontes e espaçamentos | `src/app/globals.css` |
| Tom de voz e identidade | `docs/brand-guidelines.md` |

**Fotos novas:** coloque o JPG/PNG em `public/images/produtos/`, rode `node scripts/optimize-images.mjs` (converte para WebP) e aponte o produto para `asset("/images/produtos/nome.webp")`.

## Publicação

Cada push na `main` roda lint, typecheck e build e publica a pasta estática `out/` no GitHub Pages (`.github/workflows/deploy.yml`).

Stack: Next.js 16 (export estático) · Tailwind CSS v4 · shadcn/ui.
