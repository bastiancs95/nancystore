# Prompt maestro — Catálogo de vestidos en Higgsfield

> Validado el 26-ago-2026 con el azul rey (`F1-azul-escote-modelo.png`).
> Replica el estándar del carrusel publicado `vak01`–`vak04`.

## Comando base

```bash
higgsfield generate create seedream_v5_pro --resolution 2k --aspect-ratio 3:4 \
  --image "<FOTO DE ORIGEN>" --prompt "<PROMPT>" --wait
```

**Modelo: `seedream_v5_pro` · 3 créditos.** `nano_banana_pro` es más barato (2 cr) pero **se
niega a generar personas** — cuatro intentos fallaron. Solo sirve si el maniquí se queda.

Antes de generar en serie, `higgsfield generate cost <modelo> ...` estima sin gastar.

## Estructura del prompt

Se arma concatenando tres bloques. **El ángulo lo manda la foto de origen, no el prompt** — por
eso hay que pasar la foto del ángulo que se quiere.

### ① Preservación — no se toca nunca

```
Reproduce the garment EXACTLY as in the reference photograph: [DESCRIPCIÓN DEL VESTIDO].
Same print scale and placement, same trim, same proportions.
The design must not change in any way.
```

### ② Modelo, fondo y luz — igual en los 4 ángulos

```
Clean commercial catalogue photograph. Replace the mannequin with a real young woman
with a natural body and natural skin, arms relaxed at her sides. Soft even studio light,
neutral white balance, no harsh shadows. Plain pale grey-cream studio background, softly
out of focus. No props, no decorations, no flags.
```

### ③ Encuadre — cambia por ángulo

| Ángulo | Texto a agregar |
|---|---|
| **A · Cuerpo completo** | `Framing: full body from below the neck to below the hem, centred, even margins, same camera angle as the reference.` |
| **B · Escote** | `Framing: bodice and neckline seen from the front, cropped from just above the chest down to the waistband, same camera angle as the reference.` |
| **C · Hombro y manga** | `Framing: shoulder and sleeve seen at a three-quarter angle, close crop showing the sleeve construction, same camera angle as the reference.` |
| **D · Falda y volante** | `Framing: skirt from the waistband down, showing the full sweep of the ruffle and the lace petticoat underneath, same camera angle as the reference.` |

## Descripción de cada vestido para el bloque ①

| # | Vestido | Descripción a insertar |
|---|---|---|
| 1 | **Rojo** | `red bodice with sweetheart neckline, puff sleeves in cream fabric printed with red, green and tan autumn leaves, matching leaf-print circle skirt, red waistband, wide red ruffle edged with white ric-rac and white ribbon, white lace petticoat` |
| 2 | **Azul rey** | `royal blue bodice with sweetheart neckline and blue piping, puff sleeves in cream fabric printed with blue roses and green leaves, blue waistband, blue-rose-print skirt with blue trim, white tiered lace petticoat` |
| 3 | **Morado / lila** | `lilac bodice with sweetheart neckline, puff sleeves in cream fabric printed with magenta roses and grey-green leaves, lilac waistband, matching rose-print skirt with lilac trim, white lace petticoat` |
| 4 | **Blanco y negro** | `black bodice, puff sleeves in white fabric with bold black floral print, black waistband, matching black-and-white floral skirt with black trim, white tiered lace petticoat` |
| 5 | **Negro flores** | `black bodice with black and white floral panels, puff sleeves to match, black waistband, floral skirt with pockets and matching ruffle` |
| 6 | **Fucsia** | `fuchsia bodice, skirt printed with red and white roses on a black ground, fuchsia ruffle with ribbon trim` |
| 7 | **Burdeo** | `burgundy bodice, rose-printed skirt, white lace petticoat showing at the hem` |
| 8 | **Tenida de Huasa** | `long fitted black skirt, cropped black bolero jacket, white lace blouse with a white lace jabot and red satin ribbon bow, red sash` |

## Ejemplo completo — azul rey, ángulo B (el validado)

```
Clean commercial catalogue photograph of a Chilean huasa dress worn by a real young woman.
Reproduce the garment EXACTLY as in the reference photograph: same royal blue bodice with
sweetheart neckline and blue piping, same puff sleeves in cream fabric printed with blue roses
and green leaves, same blue waistband, same blue-rose-print skirt with blue trim, same print
scale and placement. The design must not change in any way. Replace the mannequin with a real
young woman with a natural body and natural skin, arms relaxed at her sides. Soft even studio
light, neutral white balance, no harsh shadows. Plain pale grey-cream studio background, softly
out of focus. No props, no decorations, no flags. Framing: bodice and neckline seen from the
front, cropped from just above the chest down to the waistband, same camera angle as the
reference.
```

## Presupuesto

| Alcance | Imágenes | Créditos |
|---|---|---|
| 1 vestido × 4 ángulos | 4 | 12 |
| 8 vestidos × 4 ángulos | 32 | **96** |
| Reintentos (~20%) | | 20 |
| **Total catálogo completo** | | **~116** |

Saldo actual: 984,5 créditos.

## Control de calidad

Por cada imagen, comparar contra la foto de origen: escala del estampado, número de volantes,
vivo y ricrac, faja. Si algo cambió, se descarta y se regenera. **Una generación fallida por
error del servidor no cobra**; una que sale fea sí.

## Pendiente

- **¿Rostro completo o encuadre cortado?** `vak03` corta a la altura de los ojos; F1 muestra la
  cara entera. Definir el criterio antes de generar las 32 para que el carrusel sea consistente.
- Confirmar fotos de maniquí de **negro flores, fucsia y burdeo**.
