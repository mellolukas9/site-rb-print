// Converte as fotos de public/images para WebP (máx. 1080px), pois o GitHub Pages
// não tem o otimizador de imagens do Next. Rode após adicionar fotos novas:
//   node scripts/optimize-images.mjs
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = "public/images";
// Mantém JPG apenas onde redes sociais precisam (imagem de compartilhamento)
const KEEP_ORIGINAL = new Set([]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield full;
  }
}

for await (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file).replaceAll("\\", "/");
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  await sharp(file).resize({ width: 1080, height: 1080, fit: "inside", withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
  const [before, after] = [(await stat(file)).size, (await stat(out)).size];
  console.log(`${rel} → .webp  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
  if (!KEEP_ORIGINAL.has(rel)) await unlink(file);
}
