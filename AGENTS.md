# AGENTS.md — Instrucciones de trabajo

## 0. Contexto del proyecto

Sitio Astro estático de **Confecciones Nancy** (repo público `bastiancs95/nancystore`).
`npm run dev` / `build` / `preview` / `imagenes` / `verificar`. **No hacer push sin
que Bastian lo pida** — cada push a `main` publica de inmediato en confeccionesnancy.cl.

**Dónde mirar primero:**
- `src/data/productos.ts` — el catálogo (slug, imágenes, descripción).
- `src/data/site.ts` — número de WhatsApp.
- `src/layouts/BaseLayout.astro` — head, SEO, og:image.
- `docs/arquitectura-web.md` — cómo está armado el sitio.
- `docs/convenciones.md` — nombres de archivos e imágenes.
- `marketing/README.md` — estado actual del negocio/campañas.
- `media/README.md` — si esta carpeta no existe, estás en otra máquina: no la
  recrees, faltan las fotos fuente.

**Reglas del proyecto:**
- Los `slug` de `productos.ts` son inmutables: forman la URL, el sitemap y la lista
  de deseos guardada en `localStorage` de cada visitante.
- En `public/` solo va lo que el sitio realmente usa — todo lo que hay ahí se
  publica tal cual en producción.
- `media/` no tiene respaldo automático: nunca correr `git clean -x` / `-X` en este
  repo, y borrar solo duplicados verificados por hash.
- El repo es público: nunca commitear tokens, IDs de cuentas, ni valores de `.env`.
- Trampas de Windows (mayúsculas, encoding, `Set-Content`): ver `docs/convenciones.md`.
- Los agentes (`.claude/agents/*.md`) se editan ahí y se regeneran para Codex con
  `python scripts/puente_codex.py --proyecto nancy-website --aplicar` desde el repo
  `agente-proyectos` — no editar `.codex/agents/*.toml` a mano.

**Cómo entregar trabajo:** tabla tarea/responsable/fecha, separando lo que Bastian
hace remoto de lo que delega (hermano = fotos, papá/tía = tienda y WhatsApp). Evita
planes teóricos sin pasos ejecutables.

## 1. No programar sin contexto
- ANTES de escribir código: lee los archivos relevantes, revisa git log, entiende la arquitectura.
- Si no tienes contexto suficiente, pregunta. No asumas.

## 2. Respuestas cortas
- Responde en 1-3 oraciones. Sin preámbulos, sin resumen final.
- No repitas lo que el usuario dijo. No expliques lo obvio.
- Código habla por sí mismo: no narres cada línea que escribes.

## 3. No reescribir archivos completos
- Usa diffs (reemplazo parcial). NUNCA `Write` para archivos existentes salvo que el cambio sea >80% del archivo.
- Cambia solo lo necesario. No "limpies" código alrededor del cambio.

## 4. No releer archivos ya leídos
- Si ya leíste un archivo en esta conversación, no lo vuelvas a leer salvo que haya cambiado.
- Toma notas mentales de lo importante en tu primera lectura.

## 5. Validar antes de declarar hecho
- Después de un cambio: compila, corre tests, o verifica que funciona.
- Nunca digas "listo" sin evidencia de que funciona.

## 6. Cero charla aduladora
- No digas "Excelente pregunta", "Gran idea", "Perfecto", etc.
- No halagues al usuario. Ve directo al trabajo.

## 7. Soluciones simples
- Implementa lo mínimo que resuelve el problema. Nada más.
- No agregues abstracciones, helpers, tipos, validaciones, ni features que no se pidieron.
- 3 líneas repetidas > 1 abstracción prematura.

## 8. No pelear con el usuario
- Si el usuario dice "hazlo así", hazlo así. No debatas salvo riesgo real de seguridad o pérdida de datos.
- Si discrepas, menciona tu concern en 1 oración y procede con lo que pide.

## 9. Leer solo lo necesario
- No leas archivos completos si solo necesitas una sección. Usa `offset` y `limit`.
- Si sabes la ruta exacta, usa `Read` directo. No hagas Glob + Grep + Read cuando Read basta.

## 10. No narrar el plan
- Evita describir lo que vas a hacer paso a paso ("Voy a hacer X, luego Y").
- Ejecuta directamente las acciones necesarias.
- El usuario ya ve las tool calls; la narración agrega tokens sin valor.

## 11. Paralelizar tool calls
- Ejecuta lecturas/acciones en paralelo cuando sea posible.
- Evita secuencias innecesarias de llamadas dependientes.

## 12. No duplicar código en respuesta
- No copies el código completo después de editarlo si el usuario ya ve el diff.
- Muestra solo lo necesario o usa diffs.

## 13. No usar Agent innecesariamente
- No lances agentes si una tool directa (Read, Grep, etc.) resuelve el problema.
- Usa agentes solo cuando agreguen valor real (multi-step complejo, autonomía, etc.).
