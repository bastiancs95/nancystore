> ARCHIVADO (campaña Fiestas Patrias terminada, 18-sep-2026). Se conserva como referencia para la próxima temporada.

# Diseño de contenido — Catálogo Fiestas Patrias 2026

> Definido el 23-ago-2026 con Bastian, **antes** de generar nada. Este documento manda sobre
> [plan-higgsfield.md](plan-higgsfield.md) y [hoja-generacion-higgsfield.md](hoja-generacion-higgsfield.md),
> que quedaron obsoletos en su dirección de arte.

## Las decisiones que ya están tomadas

| Decisión | Elegido | Por qué |
|---|---|---|
| Función de la imagen | **Catálogo: mostrar el vestido claro** | Es el trabajo que Bastian necesita: que se vea la prenda, no una escena |
| Presentación | **Maniquí recortado al cuello** | Máxima fidelidad, mínimo costo, sin rostro ni piel que puedan verse IA |
| Escenas inventadas | **Descartadas** | Las tres quejas fueron: fondo inventado, borde recortado y "demasiado perfecto" |
| Local como set | **Descartado** | El local está en malas condiciones, no sirve de referencia visual |

## Por qué el catálogo resuelve el problema de "se ve IA"

Las tres cosas que delataron las pruebas anteriores desaparecen solas en formato catálogo:

- **Fondo inventado** → un fondo crema plano no pretende ser un lugar. Es una convención honesta
  que nadie lee como falsa.
- **Borde recortado** → con recorte real (no regenerado) no hay dos iluminaciones que fusionar.
- **Demasiado perfecto** → en catálogo eso es lo correcto, no un defecto.

El error anterior no fue el fondo crema. Fue que era **una foto suelta**. Lo que hace que un
catálogo se vea de marca es el sistema, no la imagen individual.

## El sistema visual

Todo sale de la paleta ya definida en `briefs-creatividades.md`.

### Especificación de cada ficha

| Parámetro | Valor |
|---|---|
| Formato feed | **1080 × 1350** (4:5) |
| Formato story | **1080 × 1920** (9:16), mismo recorte con más aire arriba y abajo |
| Fondo | **Crema `#F7F3EE`**, plano y parejo, sin degradado |
| Recorte superior | Justo **bajo el cuello del maniquí** — cabeza fuera del cuadro siempre |
| Recorte inferior | **Bajo el ruedo**, con la enagua completa visible |
| Margen lateral | El vestido ocupa **~78% del ancho** en su punto más ancho (el vuelo) |
| Posición vertical | Ruedo del vestido a **~12% del borde inferior** |
| Sombra | Elipse suave bajo el ruedo, negro al 12%, desenfoque alto. Sin ella el vestido flota |
| Tipografía | Nombre del color en **Cormorant Garamond**, burdeo `#7B2D3E` |
| Logo | `Nancy-Instagram-Wordmark.png`, discreto, misma esquina en las 8 |

**La regla que hace todo el trabajo:** los 8 vestidos con **la misma escala, la misma posición y
el mismo margen**. Si un vestido queda más grande que otro, el carrusel se ve amateur por más
bonita que sea cada foto por separado.

### Qué NO lleva

Sin marcos, sin collages, sin guirnaldas tricolores, sin texto sobre la prenda, sin degradados,
sin filtros de color. La competencia local satura; la sobriedad es el diferencial disponible.

## Producción: cómo se hace

### Paso 1 — Recorte (Higgsfield, 1 crédito por vestido)

```
higgsfield generate create image_background_remover --image "<foto>"
```

Devuelve PNG con fondo transparente. **El vestido no se regenera**: queda idéntico pixel por
pixel. Cero riesgo de que cambie un volante o se derrita el estampado.

### Paso 2 — Composición (Canva, 0 créditos)

Plantilla 1080×1350 con fondo `#F7F3EE`. Se pega el PNG recortado, se escala al 78% de ancho, se
posiciona el ruedo al 12% del borde inferior, se agrega la elipse de sombra. **Se duplica la
plantilla para los 8** — así la consistencia está garantizada por construcción.

El recorte bajo el cuello se hace acá, moviendo el PNG hacia abajo hasta que la cabeza del
maniquí quede fuera del lienzo. No cuesta nada y no depende de la IA.

### Paso 3 — Versión story

Misma plantilla en 1080×1920, el vestido más chico, más aire arriba para el texto y el sticker
de WhatsApp.

### Costo total del catálogo

| Concepto | Cantidad | Créditos |
|---|---|---|
| Recortes | 8 vestidos + enagua | **9** |
| Reintentos | margen | 3 |
| **Total** | | **12** |

Doce créditos. El resto del saldo queda libre para lo que venga después.

## Las piezas que salen de esto

| Pieza | Formato | Contenido |
|---|---|---|
| **Carrusel de colección** | 8-9 slides 4:5 | Portada + un vestido por slide + slide de cierre con CTA |
| **Fichas individuales** | 4:5 | Una por vestido, para posts sueltos y para Marketplace |
| **Stories** | 9:16 | Una por vestido, con sticker de WhatsApp |
| **Fichas de Marketplace** | 4:5 | La misma ficha, con precio |

De una sola producción salen las cuatro. Es el mismo activo reutilizado, que es exactamente lo
que hace Kidsbabys con su catálogo multi-tarjeta.

## Lo que dice la competencia y aplica acá

Del barrido de la Biblioteca de Anuncios y de revisar la fotografía del rubro:

- **Catron no compite con fotografía** — usa ilustración en grabado para vender "desde 1941". No
  hay que ganarles en producción; hay que ganarles en cercanía. Nuestro equivalente de patrimonio
  es "confección propia en Puerto Montt", y va en el texto, no en la imagen.
- **Almacriolla (72K seguidores) ya publica imágenes generadas con IA** abiertamente. En este
  rubro no es un riesgo reputacional. La razón para no usarla acá es que **no aporta al trabajo
  de catálogo**, no que esté mal vista.
- **Los locales publican foto única impulsada y saturada.** El carrusel sobrio nos empareja con
  los profesionales del rubro y nos separa de los locales.
- **Vocabulario: "huasa", no "china"** en títulos y segmentación. "Vestido de china" colisiona con
  anuncios de dramas asiáticos y arruina el alcance.
- **Ancla de precio: $50.000 por arrendar** un traje de huaso. El copy de la Tenida de Huasa se
  escribe contra eso.
- **La payada de B&B.Product** — un verso por color — es la mejor mecánica de copy del barrido, y
  calza exacto con 8 slides.

## Orden de prioridad de los 8 vestidos

Por potencial de venta, según el análisis de competencia:

1. **Rojo** — máxima intención de búsqueda
2. **Azul rey** — contrapeso, el mejor fotografiado
3. **Tenida de Huasa Elegante** — el diferenciador: ningún competidor vende tenida formal de
   huasa para adulta, la categoría entera es arriendo
4. Blanco y negro · 5. Fucsia · 6. Negro flores
7. Morado · 8. Burdeo
9. **Enagua Can-Can** — no es protagonista, es el upsell que sube el ticket

## Pendiente antes de producir

- Confirmar que existen fotos de maniquí de **negro flores, fucsia y burdeo**. Si no, esos tres
  salen del set con fondo de madera y necesitan recorte igual.
- Definir si las fichas llevan **precio visible**. En grupos de Facebook y Marketplace los avisos
  con precio reciben más respuestas; en el feed de Instagram es opcional.
