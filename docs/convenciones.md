# Convenciones de nombres

Regla general: minúscula, kebab-case, ASCII (sin tildes ni eñes), sin espacios.
Extensiones en minúscula: `.jpg .png .webp .mp4 .mp3`. Nada de `copia`, `final`, `v2`
en el nombre — las versiones se marcan con `-<n>`.

## Catálogo publicado (`public/images/productos/*.webp`)

`<slug>-<n>-<angulo>.webp`

- `slug`: el slug exacto de `src/data/productos.ts`. **Nunca cambia** una vez
  publicado (URL, sitemap, lista de deseos).
- `n`: posición en `imagenes[]`, 1 = foto de tarjeta y de `og:image`.
- `angulo`: qué muestra la foto. Vocabulario usado hoy (reutilízalo antes de inventar
  uno nuevo): `frente, cadera, perfil, costado, hombro, giro, paso, cintura, canto,
  manga, brazo, cuello, bolsillo, boton, puno, jabot, faja, tres-cuartos, panuelo,
  vuelta, zapateo, relajada, vuelo, falda, chaqueta-abierta`.

`images/og/<slug>.jpg` (1200×630, sin `<n>`: uno por producto) se genera junto con la
foto 1 de cada producto, no se nombra a mano.

**Las fotos de `public/images/` se cachean 1 día en el navegador** (`public/_headers`).
Si reemplazas la foto de una prenda que ya existe, súbela con **un nombre nuevo**
(por ejemplo agregando `-2` al final) en vez de sobrescribir el mismo archivo —
si no, quien ya visitó el sitio puede seguir viendo la foto vieja hasta 24 horas.

## Maestras (`media/catalogo-png/`, fuera de git)

Mismo esquema `<slug>-<n>-<angulo>.png` — `npm run imagenes` exige este patrón
(`^[a-z0-9-]+-[1-9][0-9]*-[a-z-]+\.png$`) y salta lo que no calce.

## Fotos fuente sin editar (`media/fuente/`)

Carpetas: `<tema>-<soporte>-<AAAA-MM-DD>` (fecha del EXIF si la tiene, si no la de
cuando se recibió). Dentro, fotos de cámara mantienen su nombre original; fotos de
WhatsApp se renombran a `AAAA-MM-DD_HHMMSS[-pN][-n].jpg`, tomando fecha y hora del
nombre `WhatsApp Image ... at H.MM.SS PM.jpeg` (12h → 24h). Es la única excepción al
kebab-case, porque permite rastrear la foto exacta desde una conversación o un doc
viejo sin adivinar. Ver `media/renombres.tsv` para el mapeo completo viejo → nuevo.

## Marca (`public/images/marca/`)

Por lo que son, no por dónde se subieron: `logo-oficial`, `wordmark-horizontal`,
`wordmark-cuadrado`, `wordmark-instagram`, `monograma-fondo-burdeo`,
`monograma-fondo-crema`.

## Reels e Higgsfield (`media/higgsfield/`)

- `referencias/<slug>-<parte>.png` — recortes usados como referencia de generación
  (sin cara, para que el modelo no copie la pose de una foto vieja).
- `reels/<slug>-reel-<n>.mp4` + `.prompt.txt` — el video final y el prompt exacto que
  lo generó, para poder reproducirlo o ajustarlo.

## Trampas de Windows a evitar

- **Git no distingue mayúsculas por defecto** (`core.ignorecase=true`) pero **GitHub
  Pages sí**. Un renombre que solo cambia mayúsculas (`Foto.PNG` → `foto.png`) necesita
  dos `git mv`, pasando por un nombre intermedio, o falla en silencio.
  `npm run verificar` revisa esto en cada build.
- **Nombres con acentos o rayas** (`Nancy — Logo Oficial.png`) se ven como escape
  octal en `git status`/`git log` (`core.quotepath`). Usa
  `git -c core.quotepath=false status` para verlos legibles, o hazles `git mv` a un
  nombre ASCII (ya se hizo con todo lo que estaba en `public/`).
- **No uses `Set-Content` de PowerShell** para editar `.ts`/`.md`/`.astro`: escribe en
  la codepage ANSI del sistema, y `-Encoding UTF8` agrega un BOM que rompe el
  parseo. Usa las herramientas de edición (Edit/Write) o Node (`fs.writeFile` con
  `'utf8'`), que no agregan BOM.
- **`git show <rev>:<ruta-binaria>` solo se redirige de forma segura desde Bash**
  (Git Bash), nunca desde PowerShell — PowerShell reinterpreta el stream binario.
- `.gitattributes` fuerza `text=auto eol=lf` y marca binarios explícitamente
  (`png jpg webp mp4 mp3 ico woff2`), así que el fin de línea de los archivos de texto
  no depende de qué editor los tocó.
