// Convierte las maestras PNG del catalogo (guardadas fuera del repo) a WebP livianos
// para el sitio, y genera la imagen og:image de cada producto.
//
// Entrada:  media/catalogo-png/<slug>-<n>-<angulo>.png   (solo existe en este PC)
// Salida:   public/images/productos/<slug>-<n>-<angulo>.webp
//           public/images/og/<slug>.jpg   (solo para n=1, la foto de tarjeta)
//
// Uso: npm run imagenes [-- --forzar]
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'media', 'catalogo-png');
const DST = path.join(ROOT, 'public', 'images', 'productos');
const DST_OG = path.join(ROOT, 'public', 'images', 'og');
const FORZAR = process.argv.includes('--forzar');
const NOMBRE_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*-[1-9][0-9]*-[a-z]+(?:-[a-z]+)*\.png$/;

if (!existsSync(SRC)) {
  console.log('No existe media/catalogo-png/ — las maestras solo estan en el PC de Bastian.');
  console.log('Nada que hacer (esto es normal en otra maquina o en CI).');
  process.exit(0);
}

await mkdir(DST, { recursive: true });
await mkdir(DST_OG, { recursive: true });

const archivos = (await readdir(SRC)).filter((f) => f.endsWith('.png'));
let generadas = 0, saltadas = 0, avisos = 0;
let bytesTotal = 0;

for (const archivo of archivos.sort()) {
  if (!NOMBRE_RE.test(archivo)) {
    console.warn(`[nombre invalido, se salta] ${archivo} (esperado <slug>-<n>-<angulo>.png)`);
    avisos++;
    continue;
  }
  const base = archivo.replace(/\.png$/, '');
  const m = base.match(/^(.+)-([1-9][0-9]*)-([a-z-]+)$/);
  const [, slug, nStr] = m;
  const n = parseInt(nStr, 10);

  const src = path.join(SRC, archivo);
  const dstWebp = path.join(DST, `${base}.webp`);
  const dstOg = path.join(DST_OG, `${slug}.jpg`);

  const srcStat = await stat(src);
  const yaExiste = existsSync(dstWebp) && !FORZAR;
  if (yaExiste) {
    const dstStat = await stat(dstWebp);
    if (dstStat.mtimeMs >= srcStat.mtimeMs) { saltadas++; continue; }
  }

  const img = sharp(src);
  await img
    .clone()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6, smartSubsample: true })
    .toFile(dstWebp);
  generadas++;
  const { size } = await stat(dstWebp);
  bytesTotal += size;
  if (size > 350_000) console.warn(`[pesada, ${(size / 1000).toFixed(0)} KB] ${base}.webp`);

  if (n === 1) {
    await img
      .clone()
      .resize(1200, 630, { fit: 'contain', background: '#F7F3EE' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(dstOg);
    const ogSize = (await stat(dstOg)).size;
    bytesTotal += ogSize;
    if (ogSize > 150_000) console.warn(`[og pesada, ${(ogSize / 1000).toFixed(0)} KB] ${slug}.jpg`);
  }
}

// avisar de webp huerfanas (ya no tienen maestra)
const nombresEsperados = new Set(archivos.map((f) => f.replace(/\.png$/, '.webp')));
const webpEnDisco = existsSync(DST) ? (await readdir(DST)).filter((f) => f.endsWith('.webp')) : [];
const huerfanas = webpEnDisco.filter((f) => !nombresEsperados.has(f));
if (huerfanas.length) console.warn(`WebP sin maestra en media/catalogo-png/ (revisar si sobran): ${huerfanas.join(', ')}`);

console.log(`\n${generadas} generadas, ${saltadas} sin cambios, ${avisos} con nombre invalido.`);
if (generadas) console.log(`peso generado en esta corrida: ${(bytesTotal / 1e6).toFixed(1)} MB`);
