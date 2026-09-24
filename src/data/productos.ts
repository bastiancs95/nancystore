export type Categoria =
  | 'vestidos'
  | 'conjuntos'
  | 'blazer'
  | 'abrigos'
  | 'pantalones'
  | 'fiestas-patrias';

export interface Producto {
  slug: string;
  nombre: string;
  categoria: Categoria;
  descripcion: string;
  imagenes: string[]; // rutas relativas a public, sin slash inicial. Nombre: <slug>-<n>-<angulo>.webp (ver docs/convenciones.md)
  tallas?: string[];
  destacado?: boolean;
  nuevo?: boolean;
}

export const categorias: { id: Categoria; label: string }[] = [
  { id: 'vestidos', label: 'Vestidos' },
  { id: 'conjuntos', label: 'Conjuntos' },
  { id: 'blazer', label: 'Blazer' },
  { id: 'abrigos', label: 'Abrigos' },
  { id: 'pantalones', label: 'Pantalones' },
  { id: 'fiestas-patrias', label: 'Fiestas Patrias' },
];

const CAT = 'images/productos/';

export const productos: Producto[] = [
  // ───────────── Fiestas Patrias 2026 — Vestidos de huasa ─────────────
  {
    slug: 'tenida-huasa-elegante',
    nombre: 'Tenida de Huasa Elegante',
    categoria: 'fiestas-patrias',
    descripcion:
      'Traje de huasa en negro con blusa de encaje blanco, cinta roja al cuello y falda larga entallada. Ideal para la anfitriona de la fonda o el acto del colegio.',
    imagenes: [
      CAT + 'tenida-huasa-elegante-1-tres-cuartos.webp',
      CAT + 'tenida-huasa-elegante-2-frente.webp',
      CAT + 'tenida-huasa-elegante-3-costado.webp',
      CAT + 'tenida-huasa-elegante-4-jabot.webp',
      CAT + 'tenida-huasa-elegante-5-faja.webp',
    ],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'vestido-china-rojo-hojas',
    nombre: 'Vestido de China Rojo Hojas',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china rojo con falda estampada en hojas y flores sobre fondo crema, mangas abullonadas y volante rojo con cinta. Confección propia en Puerto Montt.',
    imagenes: [CAT + 'vestido-china-rojo-hojas-1-zapateo.webp', CAT + 'vestido-china-rojo-hojas-2-vuelta.webp', CAT + 'vestido-china-rojo-hojas-3-panuelo.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-negro-flores',
    nombre: 'Vestido de China Negro Flores',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china negro con falda de flores en blanco y negro, mangas abullonadas y volante a tono. Sobrio y elegante para la fonda. Confección propia.',
    imagenes: [CAT + 'vestido-china-negro-flores-1-vuelta.webp', CAT + 'vestido-china-negro-flores-2-panuelo.webp', CAT + 'vestido-china-negro-flores-3-zapateo.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-azul-rey',
    nombre: 'Vestido de China Azul Rey',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china azul rey con mangas abullonadas y falda de rosas azules sobre fondo blanco, rematado en volante azul con cinta. Confección propia en nuestro taller de Puerto Montt.',
    imagenes: [CAT + 'vestido-china-azul-rey-1-panuelo.webp', CAT + 'vestido-china-azul-rey-2-vuelta.webp', CAT + 'vestido-china-azul-rey-3-zapateo.webp'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'vestido-lila',
    nombre: 'Vestido Lila',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido lila con falda de rosas moradas, mangas abullonadas y cinta a tono. Femenino y con mucho vuelo. Confección propia en Puerto Montt.',
    imagenes: [CAT + 'vestido-lila-1-falda.webp', CAT + 'vestido-lila-2-frente.webp', CAT + 'vestido-lila-3-giro.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-fucsia',
    nombre: 'Vestido de China Fucsia',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china en fucsia con falda de rosas sobre fondo blanco y mangas abullonadas a juego. Un color que destaca bailando cueca. Confección nacional.',
    imagenes: [CAT + 'vestido-china-fucsia-1-zapateo.webp', CAT + 'vestido-china-fucsia-2-vuelta.webp', CAT + 'vestido-china-fucsia-3-panuelo.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-rojo-copihue',
    nombre: 'Vestido de China Rojo Copihue',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china rojo con falda estampada en copihues, mangas cortas y volante con cinta blanca. Nuestra flor nacional, hecha vestido. Confección nacional.',
    imagenes: [CAT + 'vestido-china-rojo-copihue-1-relajada.webp', CAT + 'vestido-china-rojo-copihue-2-vuelo.webp', CAT + 'vestido-china-rojo-copihue-3-frente.webp'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'vestido-blanco-negro-floral',
    nombre: 'Vestido Blanco y Negro Floral',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de gala en blanco y negro, cuerpo liso con escote corazón y falda de flores en volumen, terminada en volante con cinta. Ideal para fiestas y eventos especiales.',
    imagenes: [CAT + 'vestido-blanco-negro-floral-1-cadera.webp', CAT + 'vestido-blanco-negro-floral-2-frente.webp', CAT + 'vestido-blanco-negro-floral-3-hombro.webp'],
    nuevo: true,
  },
  {
    slug: 'enagua-can-can',
    nombre: 'Enagua Can-Can',
    categoria: 'fiestas-patrias',
    descripcion:
      'Enagua de tul con tres vuelos y cinta de raso, para dar volumen a tu vestido de china. Complemento ideal para tu traje de huasa.',
    imagenes: [CAT + 'enagua-can-can-1-frente.webp'],
  },

  // ───────────── Vestidos ─────────────
  {
    slug: 'vestido-crema-encaje',
    nombre: 'Vestido Crema Encaje',
    categoria: 'vestidos',
    descripcion:
      'Vestido crema con mangas de encaje bordado y cinturón con brillos en la cintura, falda con vuelo. Elegante para eventos de día y de noche.',
    imagenes: [CAT + 'vestido-crema-encaje-1-frente.webp', CAT + 'vestido-crema-encaje-2-cintura.webp', CAT + 'vestido-crema-encaje-3-giro.webp'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'vestido-negro-flores',
    nombre: 'Vestido Negro Flores',
    categoria: 'vestidos',
    descripcion:
      'Vestido negro con print de hojas y flores en crema, mangas cortas y falda con vuelo. Cómodo y femenino para el día a día. Confección nacional.',
    imagenes: [CAT + 'vestido-negro-flores-1-frente.webp', CAT + 'vestido-negro-flores-2-cadera.webp', CAT + 'vestido-negro-flores-3-giro.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-geometrico',
    nombre: 'Vestido Geométrico Blanco y Negro',
    categoria: 'vestidos',
    descripcion:
      'Vestido blanco con estampado geométrico en negro, mangas cortas y falda con vuelo. Un print gráfico que estiliza. Confección nacional.',
    imagenes: [CAT + 'vestido-geometrico-1-frente.webp', CAT + 'vestido-geometrico-2-cintura.webp', CAT + 'vestido-geometrico-3-giro.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-negro-bordado',
    nombre: 'Vestido Negro Bordado',
    categoria: 'vestidos',
    descripcion:
      'Vestido negro con bordado floral en hilo dorado, mangas cortas y falda con vuelo. Elegante para ocasiones especiales. Confección nacional.',
    imagenes: [CAT + 'vestido-negro-bordado-1-frente.webp', CAT + 'vestido-negro-bordado-2-cadera.webp', CAT + 'vestido-negro-bordado-3-paso.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-hojas-rosa',
    nombre: 'Vestido Hojas Rosa',
    categoria: 'vestidos',
    descripcion:
      'Vestido rosa con print de hojas, sin mangas y corte recto. Liviano y fácil de combinar. Confección nacional en Puerto Montt.',
    imagenes: [CAT + 'vestido-hojas-rosa-1-frente.webp', CAT + 'vestido-hojas-rosa-2-cadera.webp', CAT + 'vestido-hojas-rosa-3-giro.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-verde-punto',
    nombre: 'Vestido Verde Punto',
    categoria: 'vestidos',
    descripcion:
      'Vestido tejido verde jaspeado, cuello en V y mangas largas, corte suelto. Abriga con estilo los días fríos del sur.',
    imagenes: [CAT + 'vestido-verde-punto-1-brazo.webp', CAT + 'vestido-verde-punto-2-paso.webp', CAT + 'vestido-verde-punto-3-manga.webp'],
    nuevo: true,
  },
  {
    slug: 'vestido-negro-dorado',
    nombre: 'Vestido Negro Bordado Dorado',
    categoria: 'vestidos',
    descripcion:
      'Vestido negro con bordado de flores y destellos dorados, ideal para fiestas de fin de año. Confección nacional en Puerto Montt.',
    imagenes: [CAT + 'vestido-negro-dorado-1-chaqueta-abierta.webp', CAT + 'vestido-negro-dorado-2-perfil.webp', CAT + 'vestido-negro-dorado-3-cadera.webp'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'vestido-negro-basico',
    nombre: 'Vestido Negro Básico',
    categoria: 'vestidos',
    descripcion:
      'Vestido negro sin mangas, corte recto y escote redondo. El básico que nunca falta en el clóset, fácil de combinar. Confección nacional.',
    imagenes: [CAT + 'vestido-negro-basico-1-frente.webp', CAT + 'vestido-negro-basico-2-cadera.webp', CAT + 'vestido-negro-basico-3-giro.webp'],
    destacado: true,
    nuevo: true,
  },

  // ───────────── Blazer ─────────────
  {
    slug: 'blazer-crema',
    nombre: 'Blazer Crema',
    categoria: 'blazer',
    descripcion:
      'Blazer corto en crema, sin solapa, para lucir sobre un vestido o un pantalón de vestir. Un básico elegante que combina con todo. Confección nacional.',
    imagenes: [CAT + 'blazer-crema-1-frente.webp', CAT + 'blazer-crema-2-cadera.webp', CAT + 'blazer-crema-3-paso.webp'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'blazer-negro-corto',
    nombre: 'Blazer Negro Corto',
    categoria: 'blazer',
    descripcion:
      'Blazer negro corto, sin solapa, ideal para dar un toque formal sobre cualquier vestido. Confección nacional en Puerto Montt.',
    imagenes: [CAT + 'blazer-negro-corto-1-frente.webp', CAT + 'blazer-negro-corto-2-cadera.webp', CAT + 'blazer-negro-corto-3-paso.webp'],
    nuevo: true,
  },

  // ───────────── Conjuntos ─────────────
  {
    slug: 'conjunto-blusa-blanca-pantalon-negro',
    nombre: 'Conjunto Blusa Blanca + Pantalón Negro',
    categoria: 'conjuntos',
    descripcion:
      'Blusa blanca clásica de manga larga con pantalón negro de vestir, corte recto. El básico infalible para la oficina. Confección nacional.',
    imagenes: [CAT + 'conjunto-blusa-blanca-pantalon-negro-1-puno.webp', CAT + 'conjunto-blusa-blanca-pantalon-negro-2-cadera.webp', CAT + 'conjunto-blusa-blanca-pantalon-negro-3-perfil.webp'],
    nuevo: true,
  },
  {
    slug: 'conjunto-floral-blazer-blanco',
    nombre: 'Conjunto Vestido Floral + Blazer Blanco',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro floral con blazer blanco corto encima. Combinación fresca para la oficina o una salida de tarde. Confección propia.',
    imagenes: [CAT + 'conjunto-floral-blazer-blanco-1-frente.webp', CAT + 'conjunto-floral-blazer-blanco-2-cadera.webp', CAT + 'conjunto-floral-blazer-blanco-3-paso.webp'],
    nuevo: true,
  },
  {
    slug: 'conjunto-floral-blazer-negro',
    nombre: 'Conjunto Vestido Floral + Blazer Negro',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro floral con blazer negro corto encima. Un look monocromático con textura y personalidad. Confección nacional.',
    imagenes: [CAT + 'conjunto-floral-blazer-negro-1-frente.webp', CAT + 'conjunto-floral-blazer-negro-2-cadera.webp', CAT + 'conjunto-floral-blazer-negro-3-paso.webp'],
    nuevo: true,
  },
  {
    slug: 'conjunto-turquesa-chaqueta-larga',
    nombre: 'Conjunto Vestido Turquesa + Chaqueta Larga',
    categoria: 'conjuntos',
    descripcion:
      'Vestido turquesa liso con chaqueta larga de encaje negro y puños lisos. Un total look elegante para la noche. Confección nacional.',
    imagenes: [CAT + 'conjunto-turquesa-chaqueta-larga-1-relajada.webp', CAT + 'conjunto-turquesa-chaqueta-larga-2-manga.webp', CAT + 'conjunto-turquesa-chaqueta-larga-3-canto.webp'],
    nuevo: true,
  },
  {
    slug: 'conjunto-hojas-chaqueta-rosa',
    nombre: 'Conjunto Vestido Hojas + Chaqueta Rosa',
    categoria: 'conjuntos',
    descripcion:
      'Vestido estampado en hojas rosa con chaqueta larga rosa lisa encima. Combinación suave y favorecedora. Confección propia en Puerto Montt.',
    imagenes: [CAT + 'conjunto-hojas-chaqueta-rosa-1-bolsillo.webp', CAT + 'conjunto-hojas-chaqueta-rosa-2-frente.webp', CAT + 'conjunto-hojas-chaqueta-rosa-3-paso.webp'],
    nuevo: true,
  },
  {
    slug: 'conjunto-traje-negro',
    nombre: 'Conjunto Traje Negro',
    categoria: 'conjuntos',
    descripcion:
      'Blazer negro entallado con pantalón a juego y blusa blanca. El traje formal para la oficina o una entrevista. Confección propia.',
    imagenes: [CAT + 'conjunto-traje-negro-1-bolsillo.webp', CAT + 'conjunto-traje-negro-2-boton.webp', CAT + 'conjunto-traje-negro-3-tres-cuartos.webp'],
    destacado: true,
    nuevo: true,
  },

  // ───────────── Abrigos ─────────────
  {
    slug: 'abrigo-jacquard-damasco',
    nombre: 'Abrigo Jacquard Damasco',
    categoria: 'abrigos',
    descripcion:
      'Abrigo entallado en jacquard damasco crema y negro, con cuello camisero, botonadura simple y bolsillos delanteros. Un clásico con textura para el día a día. Confección nacional en Puerto Montt.',
    imagenes: [CAT + 'abrigo-jacquard-damasco-1-cuello.webp', CAT + 'abrigo-jacquard-damasco-2-frente.webp', CAT + 'abrigo-jacquard-damasco-3-bolsillo.webp'],
    destacado: true,
    nuevo: true,
  },
];

export const productosDestacados = productos.filter((p) => p.destacado);

export function productosPorCategoria(cat: Categoria): Producto[] {
  return productos.filter((p) => p.categoria === cat);
}

export function productoPorSlug(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}
