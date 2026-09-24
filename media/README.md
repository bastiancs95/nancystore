# media/

**Solo existe en este computador. Está fuera de git (`.gitignore`) y NO tiene
respaldo automático.** No corras `git clean -x` ni `-X` en este repo — borraría todo
lo de acá sin aviso. Si necesitas mover el proyecto de máquina, copia esta carpeta a
mano primero.

## Qué hay y para qué sirve

| Carpeta | Contenido | Quién la usa |
|---|---|---|
| `catalogo-png/` | Las 78 fotos maestras del catálogo, sin comprimir (~7 MB c/u) | `npm run imagenes` — no toca lo que ya no está acá |
| `fuente/` | Fotos y videos crudos, sin editar: sesiones de modelo, maniquí y prendas del local | Material de referencia para generar con Higgsfield o para futuras fotos |
| `higgsfield/referencias/` | Recortes de detalle (sin cara) usados como referencia al generar | `marketing/higgsfield-receta.md` |
| `higgsfield/reels/` | Videos finales aprobados + el prompt exacto que los generó | Publicación en redes |
| `higgsfield/historias/` | Historias reutilizables (voz en off + música) | Publicación en redes |
| `_archivo/` | Pruebas descartadas, referencias obsoletas, campañas terminadas | Consulta histórica; no se usa activamente |
| `_manifiestos/` | `antes.tsv` / `despues.tsv`: sha256 de cada archivo, tomado durante la reorganización del 24-sep-2026 | Auditoría, no operación normal |
| `renombres.tsv` (trackeado) | Registro de cada movimiento/renombre/borrado hecho ese día: acción, origen, destino, hash, nota | Reconstruir de dónde salió un archivo |

## Flujo normal de trabajo

1. Foto nueva → `fuente/<tema>-<soporte>-<fecha>/` (ver `docs/convenciones.md`).
2. Se genera con Higgsfield → sale en `catalogo-png/<slug>-<n>-<angulo>.png` (catálogo)
   o `higgsfield/reels/` (video).
3. `npm run imagenes` convierte lo de `catalogo-png/` a `public/images/productos/*.webp`
   — eso sí queda en git.

## Recuperar una maestra desde git (si se perdiera esta carpeta)

Las PNG del catálogo estaban commiteadas hasta el commit `53ceb6b` (antes de pasar a
WebP). Para recuperar una, busca su nombre viejo en `renombres.tsv` y, en Git Bash:

```bash
git show 53ceb6b~1:"public/images/productos/catalogo-2026/<nombre-viejo>.png" > media/catalogo-png/<nombre-nuevo>.png
```

(`53ceb6b~1` es el commit justo antes de ese cambio — sigue estando en el historial,
no se reescribió.)
