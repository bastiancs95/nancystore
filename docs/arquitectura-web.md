# Nancy — Arquitectura del Sitio Web

Documento de referencia para Claude Code. Úsalo como contexto inicial antes de escribir cualquier código.

---

## Stack técnico

- **Astro 4.x** — generador de sitios estáticos
- **Tailwind CSS** — estilos
- **TypeScript** — tipado básico (sin sobreingeniería)
- **Astro Content Collections** — gestión de productos como archivos de datos locales
- **GitHub Pages** — hosting gratuito (output estático)

Sin base de datos. Sin backend. Sin pasarela de pagos. Todo estático.

---

## Setup inicial (comandos)

```bash
# En C:\Users\basti\Proyectos\
npm create astro@latest nancy-website
# Elegir: Empty template, TypeScript: strict, no Git (lo inicializamos después)

cd nancy-website
npx astro add tailwind
npx astro add @astrojs/sitemap

# Fuentes de Google (local via fontsource)
npm install @fontsource/cormorant-garamond @fontsource/inter

# Dev
npm run dev
```

---

## Estructura de archivos

```
nancy-website/
├── public/
│   ├── images/
│   │   ├── productos/        ← fotos de cada prenda
│   │   └── marca/            ← logo, fotos de taller, Nancy
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts         ← schema de colecciones
│   │   └── productos/        ← un .json por producto
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro
│   │   ├── ProductGrid.astro
│   │   ├── CategoryFilter.astro
│   │   ├── HeroSection.astro
│   │   ├── StorySection.astro
│   │   └── WhatsAppCTA.astro  ← botón flotante
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro        ← Home
│   │   ├── nosotras.astro     ← Historia de Nancy
│   │   ├── catalogo/
│   │   │   ├── index.astro    ← Catálogo completo
│   │   │   └── [slug].astro   ← Página de producto individual
│   │   └── contacto.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── CLAUDE.md
```

---

## Sistema de diseño

### Paleta de colores

```css
/* src/styles/global.css */
:root {
  --color-cream:    #F7F3EE;   /* fondo principal */
  --color-white:    #FFFFFF;   /* fondos de tarjetas */
  --color-black:    #1A1A1A;   /* texto principal */
  --color-gray:     #6B6B6B;   /* texto secundario, labels */
  --color-gray-lt:  #E8E4DF;   /* bordes, separadores */
  --color-burgundy: #7B2D3E;   /* acento principal, CTAs, links */
  --color-burgundy-hover: #5E2030;
}
```

```js
// tailwind.config.mjs
colors: {
  cream:    '#F7F3EE',
  'off-white': '#FFFFFF',
  ink:      '#1A1A1A',
  gray:     '#6B6B6B',
  'gray-lt':'#E8E4DF',
  burgundy: '#7B2D3E',
  'burgundy-dark': '#5E2030',
}
```

### Tipografía

```css
/* Heading / nombre de marca: Cormorant Garamond */
/* Body / navegación / labels: Inter */

@import '@fontsource/cormorant-garamond/400.css';
@import '@fontsource/cormorant-garamond/500.css';
@import '@fontsource/cormorant-garamond/600.css';
@import '@fontsource/inter/400.css';
@import '@fontsource/inter/500.css';

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--color-cream);
  color: var(--color-black);
}

h1, h2, h3, .brand {
  font-family: 'Cormorant Garamond', serif;
}
```

Escalas de texto en Tailwind:
- Logo/marca: `text-3xl font-semibold tracking-wide` (Cormorant)
- H1 de página: `text-5xl md:text-7xl font-medium` (Cormorant)
- H2 de sección: `text-3xl md:text-4xl font-medium` (Cormorant)
- Body: `text-base leading-relaxed` (Inter)
- Labels/precio/categoría: `text-sm tracking-widest uppercase` (Inter)

### Espaciado y estilo general

- Máximo ancho de contenido: `max-w-6xl mx-auto px-6`
- Mucho espacio en blanco. Secciones con `py-20 md:py-32`
- Sin sombras fuertes. Bordes sutiles `border border-gray-lt`
- Bordes redondeados mínimos: `rounded-sm` o sin redondear
- Botón primario: fondo burgundy, texto blanco, sin borde, hover a burgundy-dark
- Botón secundario: sin fondo, borde burgundy, texto burgundy

---

## Páginas

### `/` — Home

Secciones en orden:
1. **Hero** — Imagen de fondo (prenda destacada o taller), título grande "Hecho para ti", subtítulo corto, dos CTAs: "Ver catálogo" y botón WhatsApp
2. **Productos destacados** — Grid 2×2 de prendas con `destacado: true` en su JSON
3. **Historia en 3 líneas** — Texto corto + foto del taller o de Nancy, link a `/nosotras`
4. **Categorías** — 6 íconos/imágenes de categoría con link a catálogo filtrado
5. **CTA final** — Banda en burgundy: "¿Tienes dudas sobre tallas? Escríbenos" + botón WhatsApp

### `/nosotras`

1. **Foto de Nancy o del taller** — imagen grande, atmosférica
2. **Historia** — 3-4 párrafos. Quiénes son. El padre que confecciona. Puerto Montt. Por qué hacen lo que hacen. Tono cercano, no corporativo.
3. **Valores en 3 columnas** — Confección propia / Atención personalizada / Ropa para cuerpos reales
4. **Proceso** — 3 pasos visuales: Diseño → Confección → Entrega. Fotos del proceso si hay.
5. **CTA** — "Conoce nuestra colección actual"

### `/catalogo`

1. **Header de página** — Título "Colección" + cantidad de prendas disponibles
2. **Filtros por categoría** — Pills/chips: Todos / Blazers / Blusas / Vestidos / Jumpers / Pantalones / Poleras
3. **Grid de productos** — 2 columnas mobile, 3 columnas desktop. `ProductCard` por prenda.
4. **Sin paginación inicial** — mostrar todo (catálogo pequeño al inicio)

`ProductCard` muestra: foto, nombre, precio en CLP formateado (`$45.000`), categoría label, badges si aplica (Nuevo, Pocas unidades). Al hacer click va a `/catalogo/[slug]`.

### `/catalogo/[slug]`

1. **Galería** — imagen principal grande + miniaturas laterales (o swipe en mobile)
2. **Info de producto** — nombre (Cormorant, grande), precio, descripción, tallas disponibles como selector
3. **CTA principal** — botón "Consultar por WhatsApp" que abre wa.me con mensaje prellenado: `Hola Nancy, me interesa el [nombre del producto], talla [X]`
4. **Detalles** — Material, cuidados, tiempo de confección si aplica
5. **Otros productos** — 3 productos de la misma categoría abajo

### `/contacto`

1. **Mapa o dirección** — dirección del local en Puerto Montt (texto o embed Google Maps)
2. **Medios de contacto** — WhatsApp (número), Instagram (@handle), horarios del local
3. **Formulario simple** — nombre, email, mensaje (sin backend; usar Formspree o similar para recibir mails gratis)

---

## Datos de productos

### Schema (`src/content/config.ts`)

```typescript
import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'data',
  schema: z.object({
    nombre:      z.string(),
    slug:        z.string(),
    categoria:   z.enum(['blazers','blusas','jumpers','vestidos','poleras','pantalones']),
    precio:      z.number(),           // en CLP, ej: 45000
    descripcion: z.string(),
    tallas:      z.array(z.string()),  // ["S","M","L","XL"]
    imagenes:    z.array(z.string()),  // rutas relativas a public/images/productos/
    disponible:  z.boolean().default(true),
    destacado:   z.boolean().default(false),
    material:    z.string().optional(),
    cuidados:    z.string().optional(),
    nuevo:       z.boolean().default(false),
  }),
});

export const collections = { productos };
```

### Ejemplo de producto (`src/content/productos/blazer-clasico.json`)

```json
{
  "nombre": "Blazer Clásico Negro",
  "slug": "blazer-clasico-negro",
  "categoria": "blazers",
  "precio": 48000,
  "descripcion": "Blazer estructurado de confección nacional. Corte recto, manga larga, botonadura simple. Ideal para entornos formales y semi-formales.",
  "tallas": ["S", "M", "L", "XL", "2XL"],
  "imagenes": ["blazer-clasico-negro-1.jpg", "blazer-clasico-negro-2.jpg"],
  "disponible": true,
  "destacado": true,
  "material": "Gabardina nacional",
  "cuidados": "Lavar a mano en frío, no centrifugar",
  "nuevo": false
}
```

---

## Componente WhatsApp CTA

Botón flotante en esquina inferior derecha en todas las páginas. Número configurable en una constante.

```astro
<!-- src/components/WhatsAppCTA.astro -->
---
const WHATSAPP_NUMBER = '56912345678'; // reemplazar con número real
const DEFAULT_MSG = encodeURIComponent('Hola Nancy, me gustaría consultar sobre sus prendas');
const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MSG}`;
---
<a href={href} target="_blank" rel="noopener"
   class="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#1ebe5d] transition-colors">
  <!-- ícono WhatsApp SVG inline -->
</a>
```

---

## Mensaje de WhatsApp por producto

En `/catalogo/[slug]`, el botón genera un link así:

```typescript
const msg = encodeURIComponent(
  `Hola Nancy, me interesa el producto "${producto.nombre}". ¿Está disponible en talla ${tallaSel}?`
);
const waLink = `https://wa.me/56912345678?text=${msg}`;
```

---

## Navegación (Header)

- Logo "Nancy" (Cormorant Garamond, texto, link a `/`)
- Links: Nosotras · Catálogo · Contacto
- Ícono Instagram (svg inline, link externo)
- En mobile: hamburger menu (sin JS externo, toggle con checkbox CSS o Alpine.js mínimo)

Fondo: `--color-cream` (no blanco). Sticky en desktop.

---

## SEO básico (BaseLayout.astro)

```astro
---
interface Props {
  title: string;
  description: string;
  image?: string;
}
const { title, description, image = '/images/marca/og-default.jpg' } = Astro.props;
const canonical = new URL(Astro.url.pathname, Astro.site);
---
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <title>{title} | Nancy</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content={`${title} | Nancy`} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:locale" content="es_CL" />
</head>
```

---

## Deployment en GitHub Pages

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://[usuario].github.io',  // o dominio propio después
  base: '/nancy-website',               // si se usa subpath; dejar vacío con dominio propio
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
```

GitHub Actions para auto-deploy en cada push a `main`:
- Usar el workflow oficial de Astro: https://docs.astro.build/en/guides/deploy/github/

---

## Orden de implementación recomendado

1. Setup del proyecto + sistema de diseño (variables CSS, fuentes, Tailwind config)
2. `BaseLayout.astro` + `Header.astro` + `Footer.astro` + `WhatsAppCTA.astro`
3. Content collection schema + 3-4 productos de ejemplo en JSON
4. `/catalogo` con `ProductCard` y `ProductGrid`
5. `/catalogo/[slug]` página de producto
6. `/` Home con hero y productos destacados
7. `/nosotras`
8. `/contacto`
9. Deploy a GitHub Pages

---

## Notas de tono visual

- Fondo general: crema (`#F7F3EE`), nunca blanco puro
- Textos: negro profundo (`#1A1A1A`), nunca negro puro `#000`
- Mucho espacio en blanco. Priorizar respiración sobre información densa.
- Imágenes: preferir fotos con fondos neutros (paredes beige/blancas, luz natural)
- No usar sombras fuertes. El depth lo da el espacio y el contraste tipográfico.
- El acento burgundy (`#7B2D3E`) se usa solo en CTAs, links activos, y detalles de énfasis. No decorativo.
