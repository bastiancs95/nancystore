# Nancy — sitio web

Sitio de catálogo de **Confecciones Nancy** (confección nacional, Puerto Montt),
en [confeccionesnancy.cl](https://www.confeccionesnancy.cl). No vende online: cada
producto termina en un botón de WhatsApp; el precio y la talla se coordinan por chat.

## Stack

- [Astro 6](https://docs.astro.build/) en modo estático (`output: 'static'`), sin framework de UI.
- Tailwind CSS 4 como plugin de Vite (no hay `tailwind.config.*`; los tokens de diseño
  están en `src/styles/global.css`, bloque `@theme`).
- `@astrojs/sitemap` genera el sitemap en el build.
- Node ≥ 22.12. Sin base de datos: los productos son un array en `src/data/productos.ts`.
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`) construye y publica en GitHub
  Pages en cada push a `main`. **No hay entorno de staging: push a main es producción.**

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Compila a `dist/` |
| `npm run preview` | Sirve `dist/` localmente para revisar antes de publicar |
| `npm run imagenes` | Genera las WebP del catálogo desde `media/catalogo-png/` (ver abajo) |
| `npm run verificar` | Revisa `dist/` tras el build: imágenes rotas, og:image, pesos |

## Estructura

```
src/
  data/productos.ts      catálogo completo (26 productos, slug + imágenes + descripción)
  data/site.ts            números de WhatsApp
  pages/                  una ruta por archivo (catalogo/[slug].astro es dinámica)
  components/             ProductCard, ProductGallery, WishlistButton, etc.
  layouts/BaseLayout.astro  head, SEO, Header/Footer/WhatsAppCTA
public/images/
  productos/               *.webp del catálogo (nombre: <slug>-<n>-<angulo>)
  og/                      *.jpg para redes sociales (1200x630, uno por producto)
  marca/, portadas/        logos y banners
scripts/                  optimizar-imagenes.mjs, verificar-sitio.mjs
docs/                     arquitectura, convenciones de nombres, negocio, integraciones
marketing/                estrategia, calendario, recetas de contenido (no es código)
media/                    fotos fuente y maestras del catálogo — SOLO EN ESTE PC, ver media/README.md
```

Ver [docs/arquitectura-web.md](docs/arquitectura-web.md) para el detalle de cada pieza.

## Agregar o cambiar un producto

1. El slug no cambia nunca una vez publicado: forma la URL, el sitemap y la lista de
   deseos (guardada en `localStorage` del navegador de cada visitante).
2. Deja la(s) foto(s) maestra(s) en `media/catalogo-png/<slug>-<n>-<angulo>.png`
   (ver `docs/convenciones.md` para el vocabulario de ángulos).
3. `npm run imagenes` — genera el `.webp` y, si es la foto 1, el `og/<slug>.jpg`.
4. Edita `src/data/productos.ts` (o agrega el producto nuevo).
5. `npm run build && npm run verificar` antes de dar por terminado.

Sin las maestras en `media/` (por ejemplo, en otra máquina), `npm run imagenes` no
hace nada — no falla, solo avisa. Las `.webp` ya generadas quedan en `public/` y se
versionan en git normalmente.

## Clonar este repo

El historial de git pesa varios cientos de MB (imágenes del catálogo de versiones
anteriores). Para un clon liviano:

```
git clone --depth 1 https://github.com/bastiancs95/nancystore.git
```

## Documentación

- [docs/arquitectura-web.md](docs/arquitectura-web.md) — cómo está construido el sitio
- [docs/convenciones.md](docs/convenciones.md) — nombres de archivos e imágenes
- [docs/negocio.md](docs/negocio.md) — contexto del negocio y decisiones tomadas
- [docs/integraciones.md](docs/integraciones.md) — Meta, Higgsfield, GitHub Pages
- [marketing/README.md](marketing/README.md) — estrategia, calendario, estado actual
