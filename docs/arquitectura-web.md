# Arquitectura del sitio

Astro 6 estático. Sin backend, sin base de datos, sin carrito. Cada página se genera
en build time; el único JavaScript en el navegador es para la galería de fotos, la
lista de deseos (localStorage) y el menú móvil.

## Configuración

`astro.config.mjs`: `site: 'https://www.confeccionesnancy.cl'`, `base: '/'`,
`output: 'static'`, Tailwind 4 como plugin de Vite, `@astrojs/sitemap`.

No hay `tailwind.config.*`: los tokens de diseño (colores, tipografías) están en
`src/styles/global.css`, en un bloque `@theme` de Tailwind 4.

## Datos: `src/data/`

- **`productos.ts`** — el catálogo completo, 26 productos en un array `Producto[]`:
  ```ts
  interface Producto {
    slug: string;           // inmutable: URL, sitemap, localStorage de la lista de deseos
    nombre: string;
    categoria: Categoria;   // 'vestidos' | 'conjuntos' | 'blazer' | 'abrigos' | 'pantalones' | 'fiestas-patrias'
    descripcion: string;
    imagenes: string[];     // CAT + '<slug>-<n>-<angulo>.webp', en orden de muestra
    tallas?: string[];
    destacado?: boolean;    // aparece en la home
    nuevo?: boolean;
  }
  ```
  `imagenes[0]` es la foto de tarjeta (`ProductCard`) y también da nombre al archivo
  de `og:image` (`images/og/<slug>.jpg`, generado aparte — ver `docs/convenciones.md`).
  `productosDestacados` y `productosPorCategoria()` son los únicos derivados.

- **`site.ts`** — `WHATSAPP_PRINCIPAL` y `WHATSAPP_NUMEROS` (alternativos, sin usar hoy
  en el sitio) y `waLink(mensaje, numero?)`, que arma la URL `wa.me/...?text=...`.

## Páginas (`src/pages/`)

| Ruta | Archivo | Qué hace |
|---|---|---|
| `/` | `index.astro` | Hero, banner de Fiestas Patrias, 6 productos `destacado: true` |
| `/catalogo` | `catalogo/index.astro` | Los 26 productos, con `CategoryFilter` |
| `/catalogo/<slug>` | `catalogo/[slug].astro` | `getStaticPaths()` genera una ruta por producto. Galería, tallas, WhatsApp, hasta 3 productos relacionados (misma categoría) |
| `/fiestas-patrias` | `fiestas-patrias.astro` | Los productos de categoría `fiestas-patrias` |
| `/nosotras` | `nosotras.astro` | Quiénes son |
| `/contacto` | `contacto.astro` | Datos de contacto |
| `/lista-deseos` | `lista-deseos.astro` | Renderiza los 26 `ProductCard` ocultos (`hidden`) y muestra solo los guardados en `localStorage`, vía JS en el cliente |
| `/wsp` | `wsp.astro` | Redirección directa a WhatsApp (`noindex`, no debería estar en el sitemap) |

## Componentes (`src/components/`)

- **`ProductCard`** — imagen (`imagenes[0]`), nombre, categoría; enlaza a `/catalogo/<slug>`.
- **`ProductGallery`** — con 1 foto, `<img>` simple. Con varias: miniaturas a la
  izquierda (todas `loading="lazy"`) + diapositivas apiladas en `absolute inset-0`
  con opacidad, controladas por un `<script>` en el cliente (flechas, swipe táctil,
  teclado). **Las diapositivas ocultas están dentro del viewport**, así que el
  navegador las descarga igual — el `loading="lazy"` de la 2ª en adelante no difiere
  nada en la práctica.
- **`ProductGrid` / `CategoryFilter`** — grilla de tarjetas y filtro por categoría.
- **`WishlistButton`** — botón de corazón; usa `data-wishlist-toggle` + `src/scripts/wishlist.ts`.
- **`WhatsAppCTA`** — botón flotante, en todas las páginas vía `BaseLayout`.
- **`Header` / `Footer`** — nav, logo, contador de la lista de deseos.

## Lista de deseos (`src/scripts/wishlist.ts`)

Sin backend ni cuenta de usuario: la lista es un array de **slugs** en
`localStorage['nancy:lista-deseos']`. `toggle(slug)` la actualiza y dispara un
`CustomEvent('lista:cambio')`; `sincronizar()` (llamada desde `Header`) actualiza el
contador y el estado de los botones; `/lista-deseos` escucha `'lista:render'` para
mostrar/ocultar cada tarjeta y arma un mensaje de WhatsApp con los nombres guardados.
**Renombrar o mover imágenes nunca rompe la lista de deseos**, porque solo guarda slugs.

## SEO y `og:image` (`BaseLayout.astro`)

- `canonical` y `og:url`: `new URL(Astro.url.pathname, Astro.site)`.
- `og:image`: cada página pasa una ruta relativa a `public/` como prop `image`;
  `BaseLayout` la vuelve absoluta con `new URL(image, Astro.site)`. Por defecto es
  `/images/marca/monograma-fondo-burdeo.png`; cada producto usa su propio
  `/images/og/<slug>.jpg` (1200×630, generado por `npm run imagenes`, no por Astro).
- `favicon.svg` (la "N"), con `favicon.ico` de respaldo para navegadores que no leen SVG.

## Imágenes: pipeline y por qué no usa `astro:assets`

Todo son `<img>` directos a `public/` — no hay `src/assets/` ni `<Image>` de Astro
(`astro:assets` exige mover los archivos a `src/` e importarlos, lo que no encaja con
un catálogo que crece por edición de datos, no de código). En su lugar, la
optimización pasa por **`npm run imagenes`** (`scripts/optimizar-imagenes.mjs`, con
`sharp`): lee las PNG maestras de `media/catalogo-png/` (fuera de git, ver
`media/README.md`) y genera los `.webp` livianos de `public/images/productos/` más el
`.jpg` de `og/`. Ver `docs/convenciones.md` para el nombre exacto de archivo.

`scripts/verificar-sitio.mjs` (`npm run verificar`, y un paso del deploy) revisa el
`dist/` ya construido: que cada `src`/`href`/`og:image` apunte a un archivo que existe
con las mismas mayúsculas (GitHub Pages distingue mayúsculas; Windows no), que el
`og:image` sea absoluto y liviano, y que ninguna imagen pase de 600 KB.

## Deploy

**El sitio lo publica Cloudflare Pages, no GitHub Pages.** Cloudflare está conectado
directo al repo (`bastiancs95/nancystore`, rama `main`, deploy automático) y corre su
propio build — panel: Cloudflare → Workers & Pages → `nancystore` → Settings → Build.
El **build command ahí debe ser `npm run build && npm run verificar`**, para que el
guardián de imágenes rotas/pesadas realmente bloquee lo que se publica.

`.github/workflows/ci.yml` (antes `deploy.yml`) ya **no publica nada**: solo corre
`npm ci && npm run build && npm run verificar` en cada push a `main` y en cada PR,
como chequeo de CI independiente del de Cloudflare. GitHub Pages se desactivó porque
servía una copia paralela y rota (sin `base` configurado, sin CSS) que nadie visitaba.

**No hay ambiente de prueba: todo push a `main` dispara producción en Cloudflare.**
Revisa con `npm run build && npm run preview` antes de hacer push.
