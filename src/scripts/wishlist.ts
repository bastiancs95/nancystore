const KEY = 'nancy:lista-deseos';

export function getLista(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr.filter((s) => typeof s === 'string') : [];
  } catch {
    return [];
  }
}

function guardar(slugs: string[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(slugs));
  } catch {}
  document.dispatchEvent(new CustomEvent('lista:cambio', { detail: slugs }));
}

export function toggle(slug: string): boolean {
  const lista = getLista();
  const i = lista.indexOf(slug);
  if (i === -1) lista.push(slug);
  else lista.splice(i, 1);
  guardar(lista);
  return i === -1;
}

export function sincronizar() {
  const lista = getLista();

  document.querySelectorAll<HTMLElement>('[data-wishlist-toggle]').forEach((btn) => {
    const activo = lista.includes(btn.dataset.wishlistToggle || '');
    btn.setAttribute('aria-pressed', activo ? 'true' : 'false');
    btn.querySelector('svg')?.setAttribute('fill', activo ? 'currentColor' : 'none');
    btn.classList.toggle('text-[var(--color-burgundy)]', activo);
    btn.classList.toggle('text-[var(--color-gray)]', !activo);
    const etiqueta = btn.querySelector<HTMLElement>('[data-wishlist-label]');
    if (etiqueta) etiqueta.textContent = activo ? 'Guardado en tu lista de deseos' : 'Guardar en lista de deseos';
  });

  document.querySelectorAll<HTMLElement>('[data-wishlist-count]').forEach((el) => {
    el.textContent = String(lista.length);
    el.classList.toggle('hidden', lista.length === 0);
  });

  document.dispatchEvent(new CustomEvent('lista:render', { detail: lista }));
}

export function init() {
  document.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-wishlist-toggle]');
    if (!btn) return;
    e.preventDefault();
    toggle(btn.dataset.wishlistToggle || '');
  });
  document.addEventListener('lista:cambio', sincronizar);
  window.addEventListener('storage', sincronizar);
  sincronizar();
}
