# Integraciones

Ninguna de estas es parte del build del sitio (`npm run build` no las necesita). Son
herramientas que se usan por fuera, desde una sesión con Claude Code, para producir
contenido y campañas.

## Meta (Facebook / Instagram)

- **Publicación orgánica** (posts, stories, Marketplace): manual, desde Meta Business
  Suite → Planner. No hay integración automática — Meta no ofrece una API de
  publicación orgánica para páginas pequeñas sin revisión de app. Guía paso a paso en
  `marketing/guia-meta.md`.
- **MCP oficial de Meta Ads** (`https://mcp.facebook.com/ads`): conectado, ve la
  página y la cuenta publicitaria, pero **Meta aún no habilita esa cuenta para Ads
  MCP** (rollout gradual) — verificar con la herramienta `ads_get_ad_accounts` antes
  de asumir que algo cambió. Mientras esté bloqueada, sirve para biblioteca de
  anuncios de competencia y benchmarks, no para crear/editar campañas.
- **Graph API directa** (token propio, sin depender del MCP): variables
  `META_ACCESS_TOKEN` (token de usuario, vence — hay que renovarlo desde el Graph API
  Explorer) y `META_PAGE_TOKEN` (token de página, no vence) en `.env` (nunca se
  commitea; ver `.env.example`). Con esto se leen publicaciones e insights orgánicos
  de FB/IG y se administran campañas sin esperar el rollout del MCP. Base:
  `https://graph.facebook.com/v23.0`.
- Los IDs de cuenta publicitaria, página e Instagram, y las fechas exactas de
  vencimiento de los tokens, se guardan en la memoria local de la sesión de Claude,
  no en este repo (es público).

## Higgsfield (generación de imágenes/video con IA)

- Se usa el **CLI oficial** (`higgsfield`, instalado globalmente vía npm, sesión
  propia), no el MCP: el MCP falla con `Issuer mismatch (RFC 9207)` al autenticar
  (bug de su lado, sin fix conocido).
- Genera las fotos del catálogo (modelo real reemplazando al maniquí, mismo diseño de
  prenda) y los reels de producto. Receta completa, con los prompts que funcionan y
  los que no, en `marketing/higgsfield-receta.md`.
- Cuesta créditos por generación (`higgsfield generate cost ...` estima sin gastar).
  El saldo se revisa con `higgsfield account status` — no se documenta el número
  exacto acá porque cambia todo el tiempo.

## GitHub Pages

- Deploy automático vía Actions en cada push a `main` (`.github/workflows/deploy.yml`).
  Dominio propio configurado en Settings → Pages del repo (no hay archivo `CNAME` en
  el código: eso se configura ahí, no en git).
- Límite práctico de 1 GB para el sitio publicado; hoy son unos 13 MB.
- Sin Git LFS: las imágenes livianas (`.webp`, unos cientos de KB) no lo necesitan.
