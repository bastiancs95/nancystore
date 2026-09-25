// Verifica el build en dist/: que cada imagen referenciada exista con las mismas
// mayusculas (Windows no distingue mayusculas, GitHub Pages si), que el og:image sea
// absoluto y liviano, y que ninguna imagen publicada sea excesivamente pesada.
//
// Uso: npm run verificar (despues de npm run build)
import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const LIMITE_IMAGEN = 600_000; // bytes
const LIMITE_OG = 300_000;
const LIMITE_DIST = 60_000_000;

if (!existsSync(DIST)) {
  console.error('No existe dist/. Corre "npm run build" primero.');
  process.exit(1);
}

async function walk(dir, out) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else out.push(full);
  }
}

const htmlFiles = [];
await walk(DIST, htmlFiles);
const htmls = htmlFiles.filter((f) => f.endsWith('.html'));

let errores = 0;
const distFilesLower = new Set();
{
  const all = [];
  await walk(DIST, all);
  for (const f of all) distFilesLower.add(path.relative(DIST, f).split(path.sep).join('/').toLowerCase());
}

function existeExacto(relPath) {
  // relPath viene sin slash inicial, relativo a dist/
  const full = path.join(DIST, relPath);
  return existsSync(full);
}

const ATTR_RE = /\s(?:src|href|content)="([^"]+)"/g;

for (const html of htmls) {
  const text = await readFile(html, 'utf8');
  const relHtml = path.relative(DIST, html).split(path.sep).join('/');
  let m;
  while ((m = ATTR_RE.exec(text))) {
    let url = m[1];
    if (!url || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:')) continue;
    if (url.startsWith('http://') || url.startsWith('https://')) {
      if (!url.startsWith('https://www.confeccionesnancy.cl/')) continue; // externo, no lo validamos
      url = url.replace('https://www.confeccionesnancy.cl', '');
    }
    if (!url.startsWith('/')) continue; // relativo tipo whatsapp:// u otros, no nos interesa
    const base = url.slice(1).split('?')[0].split('#')[0];
    const sinSlash = base.replace(/\/$/, '');
    // Astro sirve algunas rutas como archivo plano (ej. 404.html en vez de 404/index.html,
    // porque asi lo esperan los hosts estaticos), asi que se acepta cualquiera de las dos formas.
    const candidatos = base === ''
      ? ['index.html']
      : [path.posix.join(base, 'index.html'), `${sinSlash}.html`, sinSlash];
    if (!candidatos.some(existeExacto)) {
      const rel = candidatos[0];
      const existeCI = distFilesLower.has(rel.toLowerCase());
      console.error(`[ROTO] ${relHtml}: "${url}" -> dist/${rel} no existe${existeCI ? ' (existe con OTRAS MAYUSCULAS)' : ''}`);
      errores++;
    }
  }

  // og:image debe ser absoluta
  const ogMatch = text.match(/property="og:image" content="([^"]+)"/);
  if (ogMatch && !ogMatch[1].startsWith('https://www.confeccionesnancy.cl/')) {
    console.error(`[OG NO ABSOLUTA] ${relHtml}: ${ogMatch[1]}`);
    errores++;
  }
  if (ogMatch) {
    const ogPath = ogMatch[1].replace('https://www.confeccionesnancy.cl', '').slice(1);
    if (existeExacto(ogPath)) {
      const size = (await stat(path.join(DIST, ogPath))).size;
      if (size > LIMITE_OG) { console.error(`[OG PESADA, ${(size / 1000).toFixed(0)} KB] ${relHtml}`); errores++; }
    }
  }
}

// imagenes en dist/images no deben pasar de 600KB, no deben ser png/jpeg, ni tener mayusculas/espacios
const imgFiles = [];
await walk(path.join(DIST, 'images'), imgFiles);
for (const f of imgFiles) {
  const rel = path.relative(DIST, f).split(path.sep).join('/');
  const size = (await stat(f)).size;
  if (size > LIMITE_IMAGEN) { console.error(`[PESADA, ${(size / 1000).toFixed(0)} KB] ${rel}`); errores++; }
  const base = path.basename(f);
  if (/\.(png|jpeg)$/i.test(base) && !rel.includes('/marca/') && !rel.includes('/portadas/') && !rel.includes('/og/')) {
    console.error(`[FORMATO NO OPTIMIZADO] ${rel}`); errores++;
  }
  if (/[A-Z ]/.test(rel.replace(/^images\//, ''))) {
    console.error(`[MAYUSCULA O ESPACIO EN LA RUTA] ${rel}`); errores++;
  }
}

// tamano total de dist
let total = 0;
const allDist = [];
await walk(DIST, allDist);
for (const f of allDist) total += (await stat(f)).size;
console.log(`dist/: ${(total / 1e6).toFixed(1)} MB en ${allDist.length} archivos`);
if (total > LIMITE_DIST) { console.error(`[DIST DEMASIADO PESADO] ${(total / 1e6).toFixed(1)} MB > ${LIMITE_DIST / 1e6} MB`); errores++; }

if (errores > 0) {
  console.error(`\n${errores} problema(s) encontrados.`);
  process.exit(1);
}
console.log('\nOK: sin problemas.');
