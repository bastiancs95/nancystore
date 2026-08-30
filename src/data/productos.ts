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
  imagenes: string[]; // rutas relativas a public, sin slash inicial
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

const CAT = 'images/productos/catalogo-2026/';

export const productos: Producto[] = [
  // ───────────── Fiestas Patrias 2026 — Vestidos de huasa ─────────────
  {
    slug: 'vestido-china-azul-rey',
    nombre: 'Vestido de China Azul Rey',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china azul rey con mangas abullonadas y falda de rosas azules sobre fondo blanco, rematado en volante azul con cinta. Confección propia en nuestro taller de Puerto Montt.',
    imagenes: [CAT + 'china-azul-rey-1-panuelo.png', CAT + 'china-azul-rey-2-vuelta.png', CAT + 'china-azul-rey-3-zapateo.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'vestido-china-fucsia',
    nombre: 'Vestido de China Fucsia',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china en fucsia con falda de rosas sobre fondo blanco y mangas abullonadas a juego. Un color que destaca bailando cueca. Confección nacional.',
    imagenes: [CAT + 'china-fucsia-3-zapateo.png', CAT + 'china-fucsia-2-vuelta.png', CAT + 'china-fucsia-1-panuelo.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-negro-flores',
    nombre: 'Vestido de China Negro Flores',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china negro con falda de flores en blanco y negro, mangas abullonadas y volante a tono. Sobrio y elegante para la fonda. Confección propia.',
    imagenes: [CAT + 'china-negro-flores-2-vuelta.png', CAT + 'china-negro-flores-1-panuelo.png', CAT + 'china-negro-flores-3-zapateo.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-rojo-hojas',
    nombre: 'Vestido de China Rojo Hojas',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china rojo con falda estampada en hojas y flores sobre fondo crema, mangas abullonadas y volante rojo con cinta. Confección propia en Puerto Montt.',
    imagenes: [CAT + 'china-roja-hojas-3-zapateo.png', CAT + 'china-roja-hojas-2-vuelta.png', CAT + 'china-roja-hojas-1-panuelo.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-rojo-copihue',
    nombre: 'Vestido de China Rojo Copihue',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china rojo con falda estampada en copihues, mangas cortas y volante con cinta blanca. Nuestra flor nacional, hecha vestido. Confección nacional.',
    imagenes: [CAT + 'rojo-copihue-3-relajada.png', CAT + 'rojo-copihue-2-vuelo.png', CAT + 'rojo-copihue-1.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'tenida-huasa-elegante',
    nombre: 'Tenida de Huasa Elegante',
    categoria: 'fiestas-patrias',
    descripcion:
      'Traje de huasa en negro con blusa de encaje blanco, cinta roja al cuello y falda larga entallada. Ideal para la anfitriona de la fonda o el acto del colegio.',
    imagenes: [
      CAT + 'huasa-formal-2-pose.png',
      CAT + 'huasa-formal-1.png',
      CAT + 'huasa-formal-3-costado.png',
      CAT + 'huasa-formal-4-jabot.png',
      CAT + 'huasa-formal-5-faja.png',
    ],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'enagua-can-can',
    nombre: 'Enagua Can-Can',
    categoria: 'fiestas-patrias',
    descripcion:
      'Enagua de tul con tres vuelos y cinta de raso, para dar volumen a tu vestido de china. Complemento ideal para tu traje de huasa.',
    imagenes: [CAT + 'enagua-cancan-1.png'],
  },

  {
    slug: 'vestido-blanco-negro-floral',
    nombre: 'Vestido Blanco y Negro Floral',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de gala en blanco y negro, cuerpo liso con escote corazón y falda de flores en volumen, terminada en volante con cinta. Ideal para fiestas y eventos especiales.',
    imagenes: [CAT + 'blanco-negro-2-cadera.png', CAT + 'blanco-negro-1.png', CAT + 'blanco-negro-3-hombro.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-lila',
    nombre: 'Vestido Lila',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido lila con falda de rosas moradas, mangas abullonadas y cinta a tono. Femenino y con mucho vuelo. Confección propia en Puerto Montt.',
    imagenes: [CAT + 'lila-2-falda.png', CAT + 'lila-1.png', CAT + 'lila-3-giro.png'],
    nuevo: true,
  },

  // ───────────── Vestidos ─────────────
  {
    slug: 'vestido-crema-encaje',
    nombre: 'Vestido Crema Encaje',
    categoria: 'vestidos',
    descripcion:
      'Vestido crema con mangas de encaje bordado y cinturón con brillos en la cintura, falda con vuelo. Elegante para eventos de día y de noche.',
    imagenes: [CAT + 'crema-encaje-1-frente.png', CAT + 'crema-encaje-2-cintura.png', CAT + 'crema-encaje-3-giro.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'vestido-negro-flores',
    nombre: 'Vestido Negro Flores',
    categoria: 'vestidos',
    descripcion:
      'Vestido negro con print de hojas y flores en crema, mangas cortas y falda con vuelo. Cómodo y femenino para el día a día. Confección nacional.',
    imagenes: [CAT + 'flores-jumper-1-frente.png', CAT + 'flores-jumper-2-cadera.png', CAT + 'flores-jumper-3-giro.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-geometrico',
    nombre: 'Vestido Geométrico Blanco y Negro',
    categoria: 'vestidos',
    descripcion:
      'Vestido blanco con estampado geométrico en negro, mangas cortas y falda con vuelo. Un print gráfico que estiliza. Confección nacional.',
    imagenes: [CAT + 'geometrico-1-frente.png', CAT + 'geometrico-2-cintura.png', CAT + 'geometrico-3-giro.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-negro-bordado',
    nombre: 'Vestido Negro Bordado',
    categoria: 'vestidos',
    descripcion:
      'Vestido negro con bordado floral en hilo dorado, mangas cortas y falda con vuelo. Elegante para ocasiones especiales. Confección nacional.',
    imagenes: [CAT + 'negro-encaje-1-frente.png', CAT + 'negro-encaje-2-cadera.png', CAT + 'negro-encaje-3-paso.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-hojas-rosa',
    nombre: 'Vestido Hojas Rosa',
    categoria: 'vestidos',
    descripcion:
      'Vestido rosa con print de hojas, sin mangas y corte recto. Liviano y fácil de combinar. Confección nacional en Puerto Montt.',
    imagenes: [CAT + 'rosa-hojas-jumper-1-frente.png', CAT + 'rosa-hojas-jumper-2-cadera.png', CAT + 'rosa-hojas-jumper-3-giro.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-verde-punto',
    nombre: 'Vestido Verde Punto',
    categoria: 'vestidos',
    descripcion:
      'Vestido tejido verde jaspeado, cuello en V y mangas largas, corte suelto. Abriga con estilo los días fríos del sur.',
    imagenes: [CAT + 'verde-punto-1-brazo.png', CAT + 'verde-punto-2-paso.png', CAT + 'verde-punto-3-manga.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-negro-dorado',
    nombre: 'Vestido Negro Bordado Dorado',
    categoria: 'vestidos',
    descripcion:
      'Vestido negro con bordado de flores y destellos dorados, ideal para fiestas de fin de año. Confección nacional en Puerto Montt.',
    imagenes: [CAT + 'vestido-dorado-1.png', CAT + 'vestido-dorado-2-perfil.png', CAT + 'vestido-dorado-3-cadera.png'],
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
    imagenes: [CAT + 'crema-blazer-1-frente.png', CAT + 'crema-blazer-2-cadera.png', CAT + 'crema-blazer-3-paso.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'blazer-negro-corto',
    nombre: 'Blazer Negro Corto',
    categoria: 'blazer',
    descripcion:
      'Blazer negro corto, sin solapa, ideal para dar un toque formal sobre cualquier vestido. Confección nacional en Puerto Montt.',
    imagenes: [CAT + 'geometrico-blazer-1-frente.png', CAT + 'geometrico-blazer-2-cadera.png', CAT + 'geometrico-blazer-3-paso.png'],
    nuevo: true,
  },

  // ───────────── Conjuntos ─────────────
  {
    slug: 'conjunto-blusa-blanca-pantalon-negro',
    nombre: 'Conjunto Blusa Blanca + Pantalón Negro',
    categoria: 'conjuntos',
    descripcion:
      'Blusa blanca clásica de manga larga con pantalón negro de vestir, corte recto. El básico infalible para la oficina. Confección nacional.',
    imagenes: [CAT + 'blusa-1-puno.png', CAT + 'blusa-2-cadera.png', CAT + 'blusa-3-perfil.png'],
    nuevo: true,
  },
  {
    slug: 'conjunto-floral-blazer-blanco',
    nombre: 'Conjunto Vestido Floral + Blazer Blanco',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro floral con blazer blanco corto encima. Combinación fresca para la oficina o una salida de tarde. Confección propia.',
    imagenes: [CAT + 'jumper-flores-blanco-1-frente.png', CAT + 'jumper-flores-blanco-2-cadera.png', CAT + 'jumper-flores-blanco-3-paso.png'],
    nuevo: true,
  },
  {
    slug: 'conjunto-floral-blazer-negro',
    nombre: 'Conjunto Vestido Floral + Blazer Negro',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro floral con blazer negro corto encima. Un look monocromático con textura y personalidad. Confección nacional.',
    imagenes: [CAT + 'jumper-flores-negro-1-frente.png', CAT + 'jumper-flores-negro-2-cadera.png', CAT + 'jumper-flores-negro-3-paso.png'],
    nuevo: true,
  },
  {
    slug: 'conjunto-turquesa-chaqueta-encaje',
    nombre: 'Conjunto Vestido Turquesa + Chaqueta Encaje Negra',
    categoria: 'conjuntos',
    descripcion:
      'Vestido turquesa liso con chaqueta larga de encaje negro semitransparente. Un contraste elegante para la noche. Confección propia.',
    imagenes: [CAT + 'negro-jumper-1-frente.png', CAT + 'negro-jumper-2-cadera.png', CAT + 'negro-jumper-3-giro.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'conjunto-turquesa-chaqueta-larga',
    nombre: 'Conjunto Vestido Turquesa + Chaqueta Larga',
    categoria: 'conjuntos',
    descripcion:
      'Vestido turquesa liso con chaqueta larga de encaje negro y puños lisos. Un total look elegante para la noche. Confección nacional.',
    imagenes: [CAT + 'turquesa-1-relajada.png', CAT + 'turquesa-2-manga.png', CAT + 'turquesa-3-canto.png'],
    nuevo: true,
  },
  {
    slug: 'conjunto-hojas-chaqueta-rosa',
    nombre: 'Conjunto Vestido Hojas + Chaqueta Rosa',
    categoria: 'conjuntos',
    descripcion:
      'Vestido estampado en hojas rosa con chaqueta larga rosa lisa encima. Combinación suave y favorecedora. Confección propia en Puerto Montt.',
    imagenes: [CAT + 'rosa-hojas-2-bolsillo.png', CAT + 'rosa-hojas-1-frente.png', CAT + 'rosa-hojas-3-paso.png'],
    nuevo: true,
  },
  {
    slug: 'conjunto-traje-negro',
    nombre: 'Conjunto Traje Negro',
    categoria: 'conjuntos',
    descripcion:
      'Blazer negro entallado con pantalón a juego y blusa blanca. El traje formal para la oficina o una entrevista. Confección propia.',
    imagenes: [CAT + 'traje-1-bolsillo.png', CAT + 'traje-2-boton.png', CAT + 'traje-3-tresCuartos.png'],
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
    imagenes: [CAT + 'abrigo-damasco-3-cuello.png', CAT + 'abrigo-damasco-1.png', CAT + 'abrigo-damasco-2-bolsillos.png'],
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
