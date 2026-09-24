# Receta Higgsfield — catálogo y reels

Se usa el **CLI oficial** (`higgsfield`, instalado globalmente vía npm, sesión propia).
El MCP no sirve: falla con `Issuer mismatch (RFC 9207)` al autenticar (declara
`mcp.higgsfield.ai` como emisor pero el token lo firma `clerk.higgsfield.ai`; sin fix
conocido). `higgsfield generate cost <modelo> ...` estima créditos sin gastar —
úsalo siempre antes de generar en serie.

## Fotos de catálogo (imagen fija)

**Modelo: `seedream_v5_pro`, `--aspect-ratio 3:4 --resolution 2k` = 3 créditos.** Es
el único que respeta la prenda. Descartados: `nano_banana_pro` se niega a generar
personas; `text2image_soul_v2` (0,12 cr) reescribe el diseño; el soul-id fue plata
perdida (25 cr) porque seedream no acepta `custom_reference_id`.

**Referencia de modelo:** `media/higgsfield/referencias/modelo.png` — mujer chilena,
pelo oscuro tomado, pecas, contextura delgada. (Hay referencias descartadas en
`media/_archivo/higgsfield-soul-ref/`: producían cuerpos demasiado llenos.)

**Salida:** `media/catalogo-png/<slug>-<n>-<angulo>.png` — el slug es el de
`src/data/productos.ts` (ver `docs/convenciones.md`). Después, `npm run imagenes`
genera el `.webp` que va al sitio.

### Comando base

```bash
higgsfield generate create seedream_v5_pro --resolution 2k --aspect-ratio 3:4 \
  --image "<FOTO DE ORIGEN>" --prompt "<PROMPT>" --wait
```

### Estructura del prompt

Se arma concatenando tres bloques. **El ángulo lo manda la foto de origen, no el
prompt** — por eso hay que pasar la foto del ángulo que se quiere.

**① Preservación — no se toca nunca**
```
Reproduce the garment EXACTLY as in the reference photograph: [DESCRIPCIÓN DEL VESTIDO].
Same print scale and placement, same trim, same proportions.
The design must not change in any way.
```

**② Modelo, fondo y luz — igual en todos los ángulos**
```
Clean commercial catalogue photograph. Replace the mannequin with a real young woman
with a natural body and natural skin, arms relaxed at her sides. Soft even studio light,
neutral white balance, no harsh shadows. Plain pale grey-cream studio background, softly
out of focus. No props, no decorations, no flags.
```

**③ Encuadre — cambia por ángulo**

| Ángulo | Texto a agregar |
|---|---|
| Cuerpo completo | `Framing: full body from below the neck to below the hem, centred, even margins, same camera angle as the reference.` |
| Escote | `Framing: bodice and neckline seen from the front, cropped from just above the chest down to the waistband, same camera angle as the reference.` |
| Hombro y manga | `Framing: shoulder and sleeve seen at a three-quarter angle, close crop showing the sleeve construction, same camera angle as the reference.` |
| Falda y volante | `Framing: skirt from the waistband down, showing the full sweep of the ruffle and the lace petticoat underneath, same camera angle as the reference.` |

### Reglas centrales (aprendidas a costa de créditos)

- **La imagen de referencia le gana al texto.** Escribir "talla M" mientras se pasa
  una foto de talla L produce talla L. Si algo del cuerpo o el encuadre no calza, se
  cambia la imagen, no el texto.
- **Estructura de la prenda → MOSTRARLA.** Escotes, cortes y terminaciones no se
  logran describiendo; se pasan 2-3 ángulos de la prenda, o un recorte cerrado del
  detalle que deriva.
- **Poses y ángulos de cámara → PALABRAS.** "Mano en la cadera, codo afuera, tres
  cuartos" sale a la primera. Pasar fotos de pose lo empeora: el modelo promedia las
  referencias.
- **Máximo 4 referencias**, numeradas en el prompt ("IMAGE 1 es la prenda, IMAGE 2 la
  modelo…").
- **Prohibir explícitamente lo que no debe aparecer** (pies, calzado, piso, borde de
  telón). Lo que no se prohíbe, el modelo lo inventa.
- **Blazer/chaqueta = decir SIEMPRE "THE JACKET HAS LONG SLEEVES ... NOT a sleeveless
  vest, NOT a gilet, NOT a waistcoat"** y que las mangas de la prenda de abajo quedan
  tapadas. Sin eso seedream convierte el blazer en chaleco sin mangas y deja asomar la
  manga del vestido (falló con el conjunto crema, 9 cr perdidos).
- **Ribetes lisos aparte del estampado.** Bandas, puños y vivos de color plano se
  describen como bloque separado ("contrasting SOLID BLACK bands"), o el modelo los
  rellena con el print.
- **Vestidos de china: poses de cueca** = pañuelo blanco liso en alto en la derecha,
  izquierda levantando la falda; 3 variantes usadas: pañuelo / vuelta / zapateo.
  Prohibir banderas y props.
- **Revisar la foto original antes de escribir el prompt**, sin heredar el de la
  prenda anterior: la enagua de un vestido asoma y la de otro no. Son decisiones por
  prenda.

### Descripción de cada vestido para el bloque ①

| Vestido | Descripción a insertar |
|---|---|
| Rojo copihue | `red bodice with sweetheart neckline, puff sleeves in cream fabric printed with red, green and tan autumn leaves, matching leaf-print circle skirt, red waistband, wide red ruffle edged with white ric-rac and white ribbon, white lace petticoat` |
| Azul rey | `royal blue bodice with sweetheart neckline and blue piping, puff sleeves in cream fabric printed with blue roses and green leaves, blue waistband, blue-rose-print skirt with blue trim, white tiered lace petticoat` |
| Lila | `lilac bodice with sweetheart neckline, puff sleeves in cream fabric printed with magenta roses and grey-green leaves, lilac waistband, matching rose-print skirt with lilac trim, white lace petticoat` |
| Blanco y negro | `black bodice, puff sleeves in white fabric with bold black floral print, black waistband, matching black-and-white floral skirt with black trim, white tiered lace petticoat` |
| Negro flores | `black bodice with black and white floral panels, puff sleeves to match, black waistband, floral skirt with pockets and matching ruffle` |
| Fucsia | `fuchsia bodice, skirt printed with red and white roses on a black ground, fuchsia ruffle with ribbon trim` |
| Burdeo | `burgundy bodice, rose-printed skirt, white lace petticoat showing at the hem` |
| Tenida de huasa | `long fitted black skirt, cropped black bolero jacket, white lace blouse with a white lace jabot and red satin ribbon bow, red sash` |

### Control de calidad

Por cada imagen, comparar contra la foto de origen: escala del estampado, número de
volantes, vivo y ricrac, faja. Si algo cambió, se descarta y se regenera. **Una
generación fallida por error del servidor no cobra**; una que sale fea sí.

## Reels (video)

**Modelo: `seedance_2_5 --mode omni_reference`, 9:16, 10s, 720p,
`--generate_audio false` = 65 créditos.** Recibe hasta 3 fotos como
`--image-references` (cuerpo completo + 2 detalles) y describe la coreografía por
segundos en el prompt. Sora (ChatGPT) no está disponible en Higgsfield.

**No pasar un video de referencia** aunque exista uno con la coreografía deseada: si
tiene otra persona, otro vestido o texto superpuesto, el modelo lo contamina (mezcla
colores, cara o texto). Describir la coreografía en palabras, segundo a segundo,
funciona mejor.

**El video copia la pose y la expresión de la foto de referencia, no solo la
prenda.** Un intento con una foto de catálogo donde la modelo tenía la falda muy
abierta y reía a carcajadas salió exagerado (rechazado). Solución: pasar **recortes
sin cara ni brazos** como referencia (`media/higgsfield/referencias/<slug>-cuerpo.png`,
`<slug>-falda.png`) y describir la tenida completa en texto. Funcionó al primer
intento en los reels siguientes.

Otras reglas:
- Movimientos **sutiles y creíbles**: sonrisa leve (no carcajada), falda apenas
  levantada (no abierta de par en par), giro lento (no rápido). Prohibir
  explícitamente lo contrario en el prompt.
- **Coreografía distinta en cada reel** (no repetir el mismo movimiento con distinta
  ropa) — se nota que es IA si todos los reels se mueven igual.
- Lo que no está en ninguna foto de referencia (por ejemplo la espalda del vestido)
  el modelo lo inventa: revisar el resultado antes de publicar.
- La música se agrega después, al publicar en Instagram — no generarla con IA.

**Salida:** `media/higgsfield/reels/<slug>-reel-<n>.mp4` + `.prompt.txt` con el
prompt exacto usado, para poder reproducirlo o ajustarlo.

## Costo (referencia, no exacto)

| Alcance | Créditos aprox. |
|---|---|
| 1 vestido × 4 ángulos de catálogo | 12 |
| 1 reel de 10s | 65 |
| Reintentos | sumar ~20% |

Revisa el saldo real con `higgsfield account status` antes de generar en volumen.
