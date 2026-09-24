# El negocio

**Confecciones Nancy** — confección nacional de ropa de mujer, taller propio en
Antonio Varas 943, Puerto Montt. Negocio familiar; el local físico ya casi no se
sostiene solo, así que el canal digital (sitio + redes) es el que tiene que vender.

**Roles:**
- Papá — dueño, corta y confecciona, atiende tienda.
- Mamá — producción en casa (vestidos de china y falsos en temporada).
- Tía — atiende tienda.
- Hermano — toma las fotos de stock (con celular, ver `marketing/guia-fotos.md`).
- Bastian — remoto: estrategia digital, contenido, este sitio.

**Canales:**
- Sitio: [confeccionesnancy.cl](https://www.confeccionesnancy.cl) (este repo).
- Instagram y Facebook: `@confeccionespuertomontt`.
- Venta: siempre por WhatsApp — no hay carrito ni pago online (ver
  `src/data/site.ts` para el número).

**Producto estrella:** vestidos de china/huasa por color, con falsos y enaguas a
juego. El diferencial es confección propia en Puerto Montt y tallas a medida, no
importado ni genérico.

## Decisiones tomadas

| Fecha | Decisión | Por qué |
|---|---|---|
| 6-jul-2026 | Presupuesto de Meta Ads < $50.000 CLP/mes; estrategia orgánico-first | El presupuesto no da para más; contenido + grupos + WhatsApp venden más barato que ads mal optimizados |
| 6-jul-2026 | Agente media-buyer automatizado (VPS + API) diferido a después del 18-sep-2026 | No hay campañas que monitorear todavía; el costo del VPS se comería el presupuesto de ads |
| 23-ago-2026 | Catálogo generado con Higgsfield (modelo real por IA) en vez de maniquí o fotos inventadas de fondo | El maniquí no vende igual que una persona puesta; los fondos generados por IA se veían artificiales |
| 24-sep-2026 | Las PNG maestras del catálogo (~500 MB) salen de git; el sitio sirve solo WebP livianos | El repo pesaba 570 MB y las páginas de producto 40-50 MB cada una |
| 24-sep-2026 | La media pesada de trabajo (fotos fuente, generaciones de IA) vive en `media/`, fuera de git y **sin respaldo automático** | Es material de trabajo, no del sitio publicado; mantenerlo en git infla el repo sin necesidad |

## Roadmap y estado actual

El plan comercial completo (fases, tareas, responsables) vive en
[`marketing/roadmap.md`](../marketing/roadmap.md). El estado de la fase actual —
qué se hizo, qué sigue — se actualiza en
[`marketing/README.md`](../marketing/README.md) § Estado actual: es la fuente de
verdad, no este archivo.

## Qué NO va en este documento

Cifras de venta, montos exactos gastados, IDs de cuentas de Meta/Facebook,
credenciales o tokens. Ese detalle vive en la memoria local de quien opera el
negocio, no en el repo (que es público). Ver `docs/integraciones.md` para lo técnico
de esas integraciones, sin los IDs.
