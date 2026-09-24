> ARCHIVADO (campaña Fiestas Patrias terminada, 18-sep-2026). Se conserva como referencia para la próxima temporada.

# Plan — Higgsfield integrado a la campaña de Fiestas Patrias 2026

## Contexto

Hoy es **23-ago-2026**: quedan **26 días** para el 18 de septiembre. Tres cosas cambiaron
respecto de lo que asumen los documentos de `marketing/`:

1. **Hay Higgsfield.** El calendario y los briefs se escribieron asumiendo solo foto + Canva.
   Varias piezas planificadas como foto estática ahora pueden ser video sin sesión nueva.
2. **Apareció un set de fotos mejor.** `fotos-chinitas2026/` trae ~58 fotos de maniquí sobre
   **fondo blanco de tela**, con 4 encuadres por vestido. Esto resuelve gratis el bloqueo que
   `briefs-creatividades.md` arrastra en dos lugares: *"Fondo original es madera — retocar a
   blanco o crema en Canva"* y *"2ª etapa: retocar fondos mejora mucho la prolijidad"*.
   Ya no hay 2ª etapa que hacer: las fotos de maniquí nacen con el fondo limpio.
3. **El análisis de competencia dio un hueco concreto.** Ningún competidor de vestuario
   dieciochero pautea en Puerto Montt, y los locales publican **foto única impulsada**. El
   movimiento es el diferencial disponible, y es barato.

Restricción dura: **no alterar el diseño de las prendas.** Son productos reales que la clienta
recibe; un vuelo, un encaje o un estampado inventado se traduce en reclamo en el probador. Y
choca de frente con el pilar de marca #1 de `estrategia-fiestas-patrias.md`, *"Confección propia
en Puerto Montt"*.

Presupuesto de créditos: **110, expiran en 3 días** (~26-ago), sin cuota mensual detrás.

## Bloqueo actual

El MCP de Higgsfield figura como **`needs authentication`**. Autorizar antes de ejecutar:

```
claude        # en terminal
/mcp          # → higgsfield → Authenticate
```

## Material disponible

`public/images/productos/fotos-chinitas2026/` — 73 archivos, **tres sets**:

| Set | Archivos | Contenido | Uso |
|---|---|---|---|
| Modelo real | 15 (`VA 01`, `VB01`, `VF 01`, `VR02`…) | Persona real, pared de madera, **cabeza cortada del encuadre**, tatuaje visible | Stills, sin IA |
| Maniquí | grupos `1.46`–`1.47` y `2.24`–`2.25` | Fondo blanco, **4 encuadres por vestido**: cuerpo completo, escote, falda con enagua, hombro/manga | **Base de los clips** |
| Detalle | grupo `2.23` y parte de `2.25` | Macros: jabot de encaje con moño rojo, vuelo con enagua | Clips de textura |

Revisé 12 de 58. Ubicados:

- **China roja** → `2.25.05 PM.jpeg` (torso; falta ubicar su cuerpo completo en el grupo `2.25`)
- **Huasa formal** → `2.24.59 PM.jpeg` (falda + bolero + enagua de encaje)
- **Jabot con moño rojo** → `2.23.53 PM.jpeg`
- **Azul rey** y **lila** → grupo `1.46`–`1.47`, 4 encuadres cada uno

Códigos de color (`briefs-creatividades.md`): va01 azul rey · vb01 burdeo · vf01 tenida huasa ·
vm01 morado · vn01 negro flores · vn03 blanco y negro · vr01 fucsia · vr02 rojo.

## El catálogo real: 9 SKUs

De `src/data/productos.ts`, categoría `fiestas-patrias` (fuente viva; si cambia el stock, manda
este archivo, no los documentos de marketing):

| # | Producto | Slug | Fotos en catálogo | ¿En set maniquí? |
|---|---|---|---|---|
| 1 | Vestido de China **Rojo** | `vestido-china-rojo-hojas` | vr02, vr02a | ✅ `2.25.05` |
| 2 | Vestido de China **Azul Rey** | `vestido-china-azul-rey` | va01 | ✅ grupo `1.47` (4 encuadres) |
| 3 | **Tenida de Huasa Elegante** | `tenida-huasa-elegante` | vf01, vf01a | ✅ `2.24.59` + `2.23.53` |
| 4 | Vestido de China **Blanco y Negro** | `vestido-china-blanco-y-negro` | vn03, vn03a, vn03b | ✅ `2.25.10` |
| 5 | Vestido de China **Negro Flores** | `vestido-china-negro-flores` | vn01, vn01a | por confirmar |
| 6 | Vestido de China **Fucsia Rosas** | `vestido-china-fucsia-rosas` | vr01, vr01a | por confirmar |
| 7 | Vestido de China **Morado** | `vestido-china-morado` | vm01 | ✅ probable (lila, grupo `1.47`) |
| 8 | Vestido de China **Burdeo** | `vestido-china-burdeo` | vb01 | por confirmar |
| 9 | **Enagua Can-Can** | `enagua-can-can` | enagua | ✅ asoma en varios encuadres |

Dos cosas que salen de cruzar esto con las fotos:

- **El set de maniquí es más nuevo (7-ago) y mejor que las fotos del catálogo web.** El catálogo
  tiene 1-3 fotos por vestido, todas del shoot sobre madera. El maniquí tiene 4 encuadres por
  vestido sobre fondo blanco. Vale la pena actualizar `productos.ts` con estas fotos — mejora el
  sitio y es gratis. Fuera del alcance de los créditos, pero conviene agendarlo.
- **Falta confirmar 3 colores en el set de maniquí** (negro flores, fucsia, burdeo). Si no están,
  esos tres van solo como foto, sin clip.

## Qué dice la competencia y qué hacemos distinto

Del barrido de la Biblioteca de Anuncios (23-ago). Solo lo que cambia decisiones:

| Hallazgo | Qué hacemos con eso |
|---|---|
| **6-12 anuncios activos en todo Chile** sobre "traje de huasa"; ninguno pautea en Puerto Montt | La subasta está vacía. No hay que gritar más fuerte, hay que estar presente. |
| **El arriendo domina**: Marjorie Donoso, Jorge Lagos, Lucas Disfraces. Ancla pública: **$50.000 por arrendar** un traje de huaso | Ángulo de copy directo: *"por lo que otros cobran por arrendarlo un fin de semana, el tuyo es tuyo y a tu medida"*. Usar en el Reel de la Tenida Huasa. |
| **"vestido de china" es término quemado** para pauta: colisiona con mini-dramas asiáticos de dropshipping | En segmentación y títulos usar **"huasa"**. "China" solo dentro del texto, donde ya hay contexto. |
| Todos cierran por WhatsApp ("Chatea con nosotros", `api.whatsapp.com`) | Confirmado el CTA. Ya está en el calendario. |
| Los locales publican **foto única impulsada**; los profesionales (Catron, Kidsbabys) corren **carrusel/catálogo multi-tarjeta** | El video nos deja arriba de los locales; el carrusel nos empareja con los profesionales. Hacemos los dos. |
| Catron vende **patrimonio, no descuento** ("desde 1941", "Colección Campo Chileno") y pautea todo el año | No competir por precio con Catron. Nuestro equivalente de patrimonio es el taller propio en Puerto Montt. |
| **B&B.Product**: carrusel donde cada tarjeta es una **payada en verso**, con escasez metida en la rima | La mecánica más robable del barrido. **Una payada por color** — calza exacto con 8 colores. Va en el Reel del 3-sept y en el carrusel del 11-sept. |
| El segmento **niñas** está mucho mejor cubierto que el de adultas (Kidsbabys, Guagua Chilota, Mi Pequeño Regalito) | Nancy no tiene producto infantil en catálogo. **Es una brecha de stock, no de contenido** — no se resuelve con créditos. Ver "Pendiente". |
| Kidsbabys corre una tarjeta **"Viste a Ambos"** (bundle) | Nuestro bundle es **vestido + enagua** = "La tenida completa del 18". Ya existe como P7. |

## Priorización de vestidos

No todos los 9 merecen el mismo esfuerzo. Orden por potencial de venta al 18:

**Tier 1 — protagonistas (60% del contenido)**

1. **Rojo** — el color dieciochero por excelencia, máxima intención de búsqueda. Ya era la
   opción A de la encuesta del 5-ago. Es el clip que va como creatividad de ads.
2. **Azul rey** — contrapeso del rojo, el que más encuadres tiene fotografiados (4 en maniquí).
3. **Tenida de Huasa Elegante** — **el diferenciador real.** Ningún competidor del barrido vende
   tenida formal de huasa para adulta; la categoría entera es arriendo de traje de huaso. Es
   además el ticket más alto del catálogo y tiene el mejor material de detalle que existe (el
   jabot de encaje con moño rojo, `2.23.53`). Aquí es donde el ancla de los $50.000 pega.

**Tier 2 — refuerzo (30%)**

4. **Blanco y negro** — el que más fotos tiene en catálogo (3), sobrio y versátil, sirve para
   quien no quiere "disfraz".
5. **Fucsia Rosas** — color que destaca en feed, bueno para detener el scroll.
6. **Negro Flores** — elegante, complementa al blanco y negro.

**Tier 3 — cobertura (10%)**

7. **Morado** y 8. **Burdeo** — 1 foto cada uno en catálogo. Entran en el carrusel de colores y
   en el Reel de lineup, sin pieza propia.
9. **Enagua Can-Can** — no es protagonista pero es **el upsell**: sube el ticket sin sumar
   confección pesada y es el motor visual de "El secreto del vuelo" (P7). Aparece asomando en
   casi todos los encuadres de falda, así que se promociona sola.

## Cuántos clips por producto

Depende de quién gane el duelo de la etapa 2:

| Producto | Escenario Wan (8 clips) | Escenario DoP Lite (~20 clips) |
|---|---|---|
| Rojo | 2 (cuerpo + falda) | 3 (+ escote) |
| Azul rey | 1 | 3 |
| Tenida Huasa | 2 (falda + jabot) | 3 (+ cuerpo completo) |
| Blanco y negro | 1 | 2 |
| Fucsia | — | 2 |
| Negro flores | — | 2 |
| Morado | 1 | 2 |
| Burdeo | — | 1 |
| Enagua / vuelo | 1 | 2 |
| **Total** | **8** | **20** |

Con 8 clips el calendario funciona pero justo. Con 20 quedan los 8 colores cubiertos, sobran
variantes para los ads y hay margen para descartar los que no pasen la prueba de fidelidad.

## Costos reales (medidos, 23-ago)

El MCP de Higgsfield **no conecta**: su OAuth devuelve `Issuer mismatch (RFC 9207)` — el servidor
se identifica con un dominio distinto al que Claude pide, y la validación corta por seguridad. No
es configuración de Bastian y no tiene fix conocido. **El MCP no se usa.**

En su lugar se usa el **CLI oficial** (`higgsfield`, ya instalado vía npm, sesión válida en la
cuenta de Bastian — plan plus, 110 créditos), que se maneja desde Bash. Es mejor que el MCP
para esto: expone `generate cost`, que estima créditos **sin gastar**.

Medido con `higgsfield generate cost <modelo> --duration 5 --resolution 720p --aspect-ratio 9:16`:

| Modelo | 5s 720p 9:16 |
|---|---|
| **wan2_7** | **7,5** |
| **kling3_0_turbo** | **7,5** |
| kling3_0 | 10 |
| seedance_2_0_mini | 12,5 |
| seedance_2_0 | 22,5 |

**El costo es lineal: 1,5 créditos por segundo.**

| Duración (wan2_7 720p) | 3s | 4s | 5s | 8s | 10s |
|---|---|---|---|---|---|
| Créditos | 4,5 | 6 | 7,5 | 12 | 15 |

`wan2_7` a 1080p 5s = **12,5** (contra 7,5 en 720p).

Cuatro reglas que definen el presupuesto:

- **Una generación fallida no devuelve créditos.**
- **Todo en 720p.** El salto a 1080p cuesta +5 créditos por clip y para Stories y Reels no aporta:
  Instagram recomprime y un 720×1280 se ve igual en teléfono.
- **No se upscalea** (Topaz cuesta 10-15 por clip, más que generar en alta de entrada).
- **Bajar de 5s a 4s compra 25% más clips**, sin descuento ni penalización por duración. Los clips
  que se cortan dentro de un Reel van a 4s; los que van solos, a 5s.

**Corrección respecto de la versión anterior de este plan: DoP no existe en el catálogo del CLI.**
El escenario de "~20 clips con DoP Lite a 3 créditos" queda descartado. `wan2_7` y
`kling3_0_turbo` empatan a 7,5 y son los más baratos disponibles.

`wan2_7` acepta exactamente lo que necesitamos: `--start-image` (image-to-video, sube el archivo
local solo), `--aspect-ratio 9:16`, `--resolution 720p`, `--duration`.

## Presupuesto: 110 créditos

Ya no hay rangos: los precios están medidos.

| Etapa | Qué | Modelo | Dur. | Unid. | Cr/u | Total |
|---|---|---|---|---|---|---|
| 0 | Triaje y recorte a 9:16 | manual | — | — | 0 | **0** |
| 1 | Calibración: ¿deforma la prenda? | wan2_7 720p | 3s | 3 | 4,5 | **13,5** |
| 2 | Duelo wan2_7 vs kling3_0_turbo | ambos 720p | 5s | 2 | 7,5 | **15** |
| 3a | Héroes (rojo, huasa, enagua, azul) | ganador | 5s | 4 | 7,5 | **30** |
| 3b | Lineup de colores (van dentro de Reel) | ganador | 4s | 6 | 6 | **36** |
| 4 | Reserva de reintentos | — | — | ~2 | — | **15,5** |
| | | | | | | **110** |

**12 clips utilizables** (2 del duelo + 4 héroes + 6 de lineup). Los 3 de calibración son
descartables por diseño.

Alcanza para: **10 stories de countdown** (8-17 sept) + **2 Reels** recortados de los mismos
clips + **1 creatividad de ads**. Y sobran 2 clips de margen sobre las 10 stories.

**Regla de decisión del duelo:** wan2_7 y kling3_0_turbo cuestan lo mismo (7,5), así que es un
concurso puro de calidad. Gana el que **conserve mejor la prenda**, no el que se vea más
cinematográfico.

### Etapa 0 — Triaje y recorte (0 créditos, primero)

1. Terminar de mapear las 58 fotos de WhatsApp: color por archivo.
2. **Recortar a 9:16 antes de subir.** Las fotos son ~3:4; si generas en 3:4 y recortas después,
   pierdes encuadre. Recortando antes, el modelo compone para el cuadro final.
3. En las de maniquí, dejar fuera del recorte: la cortina azul del borde izquierdo, el piso de
   madera y la base oxidada del maniquí. Tijera, no IA — no gastes créditos en esto.
4. Donde se pueda, dejar la **cabeza del maniquí fuera del cuadro**: el rostro pintado de maniquí
   calvo es el principal riesgo de resultado incómodo.

### Etapa 1 — Calibración (9 cr)

Tres clips de 3s en el modelo más barato, para una sola pregunta: ¿el estampado y el vuelo
sobreviven al movimiento?

- T1 — china roja, push-in lento sobre la falda
- T2 — huasa formal, tilt-up desde el ruedo
- T3 — macro del jabot, micro-dolly

**Criterio:** comparar primer y último fotograma. Si cambia el número de volantes, el estampado
se derrite o el ribete se mueve de sitio, ese modelo no sirve. No se publica nada que no pase.

### Etapa 2 — Duelo (18 cr)

Misma foto y mismo prompt en Wan 2.7 (8) y Kling 3.0 (10), 5s 720p. Gana el que **conserve mejor
la prenda**, no el que se vea más cinematográfico.

### Etapa 3 — Producción: los 8 clips del escenario conservador

Si gana DoP Lite, se amplía según la tabla "Cuántos clips por producto". Estos 8 son el mínimo
irrenunciable — con menos, el calendario no se cubre.

| # | Clip | Fuente | Dónde se usa |
|---|---|---|---|
| 1 | Azul rey, cuerpo completo, push-in | `1.47.03` | Reel P3 + story countdown |
| 2 | Lila, cuerpo completo, push-in | `1.47.05 (1)` | Reel P3 + story countdown |
| 3 | Roja, cuerpo completo | grupo `2.25` | Reel P3 + story + **creatividad de ads** |
| 4 | Negro flores, cuerpo completo | por triar | Reel P3 + story |
| 5 | Blanco y negro, falda con enagua | `2.25.10` | Reel P3 + story |
| 6 | Enagua/encaje, tilt lento | grupo `2.25` | **P7 "El secreto del vuelo"** (5-sep) + story |
| 7 | Jabot con moño rojo, micro-dolly | `2.23.53` | P4 detalle + story |
| 8 | Huasa formal, tilt-up | `2.24.59` | Diferenciación vs. competencia + story |

Más los 2 clips del duelo = **10 clips utilizables**.

### Reglas de prompt (esto protege el diseño)

**Prohibido**, porque obliga a la IA a inventar lo que la foto no muestra: órbitas, giros de 360°,
"muestra la espalda", que el maniquí camine o se dé vuelta, movimiento de cuerpo completo, clips
de más de 5s (la deriva crece con el tiempo).

**Permitido**, porque se queda dentro del encuadre: push-in lento, tilt vertical, parallax sutil,
micro-movimiento de tela (que el volante respire), cambio suave de luz.

## Dónde NO gastar créditos

- **P12 avisos de grupos y Marketplace.** El brief es explícito: UNA foto buena, sin collage, sin
  gráfica — en grupos lo que parece hecho en Canva parece spam. El video no aplica.
- **P11 "Feliz 18".** Foto real de la temporada.
- **Retoque de fondo con Nano Banana.** Ya no hace falta: el set de maniquí viene con fondo
  blanco. Ahorro de ~20 créditos respecto de la versión anterior de este plan.

## Calendario revisado (24-ago → 18-sept)

Lo que cambia respecto de `calendario-contenido.md`, que asumía foto estática:

| Fecha | Slot original | Ahora | Insumo |
|---|---|---|---|
| Lun 24 ago | P9 foto "encarga a tu medida" | igual, foto | maniquí, sin IA |
| Mié 26 ago | Story "clientas felices (si hay material)" | **Story con clip 1** — no hay material de clientas | clip 1 |
| Vie 28 ago | P5 foto mamás/colegio | igual, foto | dos vestidos de tallas distintas |
| Dom 30 ago | Grupo FB #2 | igual, foto única | P12 |
| Lun 31 ago | P8 conjuntos + torera | igual, foto | catálogo |
| **Mar 1 sept** | **Ads ON** $2.800/día | **swap: clip 3 reemplaza una de las 2 fotos** del conjunto local frío | clip 3 |
| Mar 1 sept | P1 "Llegó septiembre" | igual, foto lineup | — |
| Jue 3 sept | P6 Reel del taller | **REEMPLAZADO — P6 se pospone.** Reel "los 8 colores" con música de cueca, dos días después de encender ads | clips 1-8 |
| Sáb 5 sept | P7 foto "tenida completa" | **Reel con clips 6 + 5** — el vuelo se entiende mejor en movimiento | clips 5, 6 |
| Lun 7 sept | P4 "últimas tallas" | igual, foto | color más vendido |
| **8 → 17 sept** | 1 story diaria countdown | **los 10 clips, uno por día** | clips 1-10 |
| Vie 11 sept | P3 carrusel colores | **Reel "un color por slide"** con clips 1-5 + cueca | clips 1-5 |
| Mar 15 sept | P10 último llamado | igual, foto | fachada / vestido |
| Vie 18 sept | P11 Feliz 18 | igual, foto | — |

Los 10 clips rinden triple: **10 stories** (8-17 sept), **2 Reels** (5 y 11 sept) y **1
creatividad de ads**. No es contenido extra sobre el calendario, es el mismo calendario con las
piezas que ganan al moverse convertidas a video.

### Sobre los ads del 1-sept

`estrategia-fiestas-patrias.md` fija 2 conjuntos × 2 anuncios con $2.800/día. Con ese presupuesto
**no conviene agregar** creatividades: fragmenta el aprendizaje. Conviene **cambiar** una de las
dos fotos del conjunto local frío por el clip 3, y dejar la otra como está. Así se compara
video vs. foto sin sumar variantes.

Y hay una regla que el propio calendario ya trae y aquí aplica: *"Si un post orgánico rinde muy
bien, usarlo como creatividad extra en ads"*. Las stories del 8 al 17 son justamente el test
orgánico gratuito para saber cuál clip merece plata.

## Cronograma de los 3 días de créditos

Los créditos expiran; las publicaciones no. **Generar todo antes del 26-ago**, editar y publicar
después con calma.

- **Día 1 (23-ago):** Etapa 0 completa + Etapa 1 (9 cr) + evaluar deformación
- **Día 2 (24-ago):** Etapa 2 (18 cr) + arrancar Etapa 3
- **Día 3 (25-26 ago):** cerrar Etapa 3 y quemar la reserva en reintentos

## Verificación

1. `/mcp` muestra `higgsfield ✔ Connected`.
2. Antes de confirmar cada generación, leer el estimado del MCP y contrastarlo con la tabla. Si
   difiere, la tabla estaba mal y hay que rehacer el reparto.
3. Por cada clip: exportar primer y último fotograma y compararlos con la foto original.
   Volantes, ribete y estampado deben coincidir. El que no coincide se descarta.
4. Llevar cuenta corriente de créditos tras cada etapa. Si la Etapa 1 se pasa, recortar la
   Etapa 3 antes de tocar la reserva.
5. Cada clip exportado debe quedar en 9:16 1080×1920 para story/reel, según
   `calendario-contenido.md`.

## Pendiente de confirmar con Bastian

- **Qué se publicó realmente entre el 3 y el 22 de agosto.** El calendario tiene 12 slots en ese
  tramo; si varios quedaron sin publicar (en particular el Reel P3 del 20-ago), conviene
  recuperar ese contenido con los clips antes del 1-sept, no después.
- Si `src/data/productos.ts` sigue reflejando el **stock real por color**, para no promocionar en
  las stories de countdown un color agotado.
- **¿Hay o puede haber vestidos de niña?** Es la brecha más cara del análisis: Kidsbabys, Guagua
  Chilota y Mi Pequeño Regalito cubren ese segmento y es el que mueve la demanda de la primera
  semana de septiembre (actos de colegio). Nancy no tiene producto infantil en catálogo. No se
  resuelve con créditos de Higgsfield — es decisión de producción de la mamá, y a 26 días del 18
  la ventana para confeccionar se cierra pronto. Si existe aunque sea un par de tallas, cambia la
  prioridad del contenido.
- **Confirmar negro flores, fucsia y burdeo en el set de maniquí.** Si no están, esos tres van
  solo como foto.

## Pospuesto por decisión de Bastian (23-ago)

- **P6 "Reel del taller"** (papá cortando, manos cosiendo). Se retoma cuando las campañas ya estén
  rindiendo, no antes del 18. Razón: prioridad a contenido que vende ahora, y coordinar la
  grabación con la familia en plena producción cuesta tiempo que no sobra. El slot del 3-sept
  pasa a Reel de producto. Queda pendiente para la temporada siguiente, donde sigue siendo la
  prueba más barata del pilar "Confección propia en Puerto Montt" — lo único que el arriendo y
  los importadores no pueden copiar.

## Para más adelante (cuando haya más presupuesto)

- **Upscale con Topaz.** Fuera de alcance ahora por precio (10-15 cr/clip, más caro que generar
  en 1080p directo). Tiene sentido cuando el destino lo justifique: una creatividad de ads con
  presupuesto grande detrás, un video para el sitio, o material para pantalla más grande que un
  teléfono. Para Stories y Reels no aporta. Los clips de esta tanda quedan guardados en 720p y se
  pueden upscalear después sin regenerar.
- **Retomar los modelos caros** (Seedance, Cinema Studio) solo si el duelo demuestra que DoP y
  Wan no conservan la prenda. Hoy no hay evidencia de que haga falta.

## Fuera de alcance

No se generan modelos humanos con IA, ni fondos que sugieran un local o una producción que no
existen, ni imágenes de producto creadas desde cero.
