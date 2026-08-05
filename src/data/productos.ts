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

const FP = 'images/productos/fiestas-patrias-2026/';
const CAT = 'images/productos/catalogo/';
const IA = 'images/productos/catalogo-ia/';

export const productos: Producto[] = [
  // ───────────── Colección nueva (fotos 2026) ─────────────
  {
    slug: 'vestido-negro-encaje',
    nombre: 'Vestido Negro con Encaje',
    categoria: 'vestidos',
    descripcion:
      'Vestido negro con falda en A, mangas cortas de encaje y cintura con aplicaciones brillantes. Elegante para eventos de día y noche. Confección nacional.',
    imagenes: [IA + 'Vestido_Negro01.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'abrigo-rosa',
    nombre: 'Abrigo Rosa',
    categoria: 'abrigos',
    descripcion:
      'Abrigo largo rosa sin cierre, con bolsillos delanteros y tejido suave jaspeado. Abriga con estilo en el sur. Confección propia en Puerto Montt.',
    imagenes: [IA + 'Abrigo_Rosa.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'abrigo-gamuza-cafe',
    nombre: 'Abrigo Gamuza Café',
    categoria: 'abrigos',
    descripcion:
      'Abrigo de gamuza café con botones, cuello camisero y bolsillos laterales. Corte entallado que estiliza la figura. Confección nacional.',
    imagenes: [IA + 'Traje_Cafe01.png'],
    nuevo: true,
  },
  {
    slug: 'abrigo-negro',
    nombre: 'Abrigo Negro',
    categoria: 'abrigos',
    descripcion:
      'Abrigo negro largo con botones y cuello camisero, entallado en la cintura. Un clásico que combina con todo. Hecho en Puerto Montt.',
    imagenes: [IA + 'Traje_Negro01.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'blazer-negro',
    nombre: 'Blazer Negro',
    categoria: 'blazer',
    descripcion:
      'Blazer negro clásico con solapa y botones, perfecto para la oficina o eventos formales. Se luce con blusa blanca y pantalón de vestir. Confección nacional.',
    imagenes: [IA + 'Blazer_Negro01.png', IA + 'Blazer_Negro.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'blazer-print-floral',
    nombre: 'Blazer Print Floral',
    categoria: 'blazer',
    descripcion:
      'Blazer corto con estampado floral en blanco y negro, sin cierre y de línea recta. Dale personalidad a un look sobrio. Confección propia.',
    imagenes: [IA + 'Blazer_Print.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'blazer-gamuza-roja',
    nombre: 'Blazer Gamuza Roja',
    categoria: 'blazer',
    descripcion:
      'Blazer de gamuza roja con botones y bolsillos delanteros. Un golpe de color para el día a día. Confección nacional en Puerto Montt.',
    imagenes: [IA + 'Gamusa_Rojo01.png'],
    nuevo: true,
  },
  {
    slug: 'conjunto-rosa',
    nombre: 'Conjunto Rosa',
    categoria: 'conjuntos',
    descripcion:
      'Conjunto de abrigo rosa liviano y vestido con estampado de hojas. Femenino y cómodo para toda ocasión. Confección propia.',
    imagenes: [IA + 'Conjunto_Rosa.png'],
    destacado: true,
    nuevo: true,
  },
  {
    slug: 'conjunto-chaqueta-encaje-azul',
    nombre: 'Conjunto Chaqueta Encaje Azul',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro con falda de vuelo y chaqueta de encaje azul rey con brillos. Conjunto sofisticado para ocasiones especiales. Confección nacional.',
    imagenes: [IA + 'Encaje_Azul.png'],
    nuevo: true,
  },
  {
    slug: 'blusa-blanca',
    nombre: 'Blusa Blanca',
    categoria: 'conjuntos',
    descripcion:
      'Blusa blanca clásica de manga larga, ideal con pantalón de vestir para un look de oficina impecable. Confección nacional.',
    imagenes: [IA + 'Blusa_Blanca.jpg'],
    nuevo: true,
  },
  {
    slug: 'chaleco-azul-blusa',
    nombre: 'Chaleco Azul + Blusa',
    categoria: 'conjuntos',
    descripcion:
      'Chaleco azul con botones sobre blusa blanca de manga larga. Conjunto versátil para el trabajo o el día a día. Confección propia en Puerto Montt.',
    imagenes: [IA + 'Blusa_Blaizer.png'],
    nuevo: true,
  },

  // ───────────── Fiestas Patrias 2026 — Vestidos de huasa ─────────────
  {
    slug: 'vestido-china-azul-rey',
    nombre: 'Vestido de China Azul Rey',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china azul rey con mangas y falda de rosas azules sobre fondo blanco, terminado en volante azul con cinta. Confección propia en nuestro taller de Puerto Montt.',
    imagenes: [FP + 'va01.jpg'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-burdeo',
    nombre: 'Vestido de China Burdeo',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china en tono burdeo con estampado de rosas y enagua de encaje blanco que asoma en el vuelo. Elegante para la fonda o el acto del colegio.',
    imagenes: [FP + 'vb01.jpg'],
    nuevo: true,
  },
  {
    slug: 'tenida-huasa-elegante',
    nombre: 'Tenida de Huasa Elegante',
    categoria: 'fiestas-patrias',
    descripcion:
      'Traje de huasa en negro con blusa de encaje blanco, cinta roja y falda larga entallada. Ideal para el jinete o la anfitriona de la fonda.',
    imagenes: [FP + 'vf01.jpg', FP + 'vf01a.jpg'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-morado',
    nombre: 'Vestido de China Morado',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china morado con estampado de flores celestes y moradas, falda con doble volante morado y cinta blanca. Mucho vuelo para lucir bailando.',
    imagenes: [FP + 'vm01.jpg'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-negro-flores',
    nombre: 'Vestido de China Negro Flores',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera de flores en blanco y negro, falda con bolsillos y volante a juego. Sobrio y elegante, confección nacional.',
    imagenes: [FP + 'vn01.jpg', FP + 'vn01a.jpg'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-blanco-y-negro',
    nombre: 'Vestido de China Blanco y Negro',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera y falda de flores en blanco y negro, terminado en volante a tono. Un diseño clásico y atemporal.',
    imagenes: [FP + 'vn03.jpg', FP + 'vn03a.jpg', FP + 'vn03b.jpg'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-fucsia-rosas',
    nombre: 'Vestido de China Fucsia Rosas',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera fucsia y falda de rosas rojas y blancas sobre fondo negro, volante fucsia con cinta. Color que destaca en cualquier baile.',
    imagenes: [FP + 'vr01.jpg', FP + 'vr01a.jpg'],
    nuevo: true,
  },
  {
    slug: 'vestido-china-rojo-hojas',
    nombre: 'Vestido de China Rojo',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera roja y falda estampada en hojas y flores sobre fondo blanco, volante rojo con cinta blanca. Confección propia en Puerto Montt.',
    imagenes: [FP + 'vr02.jpg', FP + 'vr02a.jpg'],
    nuevo: true,
  },
  {
    slug: 'enagua-can-can',
    nombre: 'Enagua Can-Can',
    categoria: 'fiestas-patrias',
    descripcion:
      'Enagua de tul con tres vuelos y cinta de raso, para dar volumen a tu vestido de china. Complemento ideal para tu traje de huasa.',
    imagenes: [FP + 'enagua.jpg'],
  },

  // ───────────── Conjuntos vestido + torera ─────────────
  {
    slug: 'conjunto-negro-bordado-torera-amarilla',
    nombre: 'Conjunto Vestido Negro Bordado + Torera Amarilla',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro con bordado dorado y torera amarilla a juego. Conjunto de confección nacional para ocasiones especiales.',
    imagenes: [CAT + 'BAN01.jpg'],
  },
  {
    slug: 'conjunto-encaje-torera-blanca',
    nombre: 'Conjunto Vestido Encaje + Torera Blanca',
    categoria: 'conjuntos',
    descripcion:
      'Vestido de encaje negro sobre fondo claro con torera blanca. Elegante y versátil para eventos.',
    imagenes: [CAT + 'BBN01.jpg'],
    destacado: true,
  },
  {
    slug: 'conjunto-negro-torera-blanca',
    nombre: 'Conjunto Vestido Negro + Torera Blanca',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro con detalles laterales estampados y torera blanca. Conjunto sobrio de confección propia.',
    imagenes: [CAT + 'BBN02.jpg'],
  },
  {
    slug: 'conjunto-cuadros-torera-rosa',
    nombre: 'Conjunto Vestido Cuadros + Torera Rosa',
    categoria: 'conjuntos',
    descripcion:
      'Vestido a cuadros en tonos rosados con torera rosa lisa. Look femenino para el día a día o la oficina.',
    imagenes: [CAT + 'BRR01.jpg'],
  },
  {
    slug: 'torera-pata-de-gallo-top-encaje',
    nombre: 'Torera Pata de Gallo + Top Encaje',
    categoria: 'conjuntos',
    descripcion:
      'Torera corta en pata de gallo blanco y negro con top de encaje blanco. Combinación clásica y elegante.',
    imagenes: [CAT + 'SBN01.jpg'],
  },
  {
    slug: 'conjunto-floral-torera-azul',
    nombre: 'Conjunto Vestido Floral + Torera Azul',
    categoria: 'conjuntos',
    descripcion:
      'Vestido floral en tonos celestes con torera azul rey. Conjunto fresco de confección nacional.',
    imagenes: [CAT + 'BAB01.jpg'],
  },
  {
    slug: 'conjunto-amarillo-torera-negra',
    nombre: 'Conjunto Vestido Amarillo + Torera Negra',
    categoria: 'conjuntos',
    descripcion:
      'Vestido amarillo con estampado floral y torera negra. Contraste alegre y elegante para destacar.',
    imagenes: [CAT + 'BNA01.jpg'],
  },
  {
    slug: 'conjunto-floral-torera-verde',
    nombre: 'Conjunto Vestido Floral + Torera Verde',
    categoria: 'conjuntos',
    descripcion:
      'Vestido floral en tonos claros con torera verde. Conjunto primaveral de confección propia.',
    imagenes: [CAT + 'BVB01.jpg'],
  },
  {
    slug: 'conjunto-verde-torera-gris',
    nombre: 'Conjunto Vestido Verde + Torera Gris',
    categoria: 'conjuntos',
    descripcion:
      'Vestido verde con bordado plateado floral y torera gris. Elegante para eventos de tarde y noche.',
    imagenes: [CAT + 'BGV01.jpg'],
  },
  {
    slug: 'conjunto-verde-torera-estampada',
    nombre: 'Conjunto Vestido Verde + Torera Estampada',
    categoria: 'conjuntos',
    descripcion:
      'Vestido verde liso con torera estampada en negro y dorado. Conjunto con personalidad de confección nacional.',
    imagenes: [CAT + 'BNV01.jpg'],
  },
  {
    slug: 'conjunto-negro-torera-verde-agua',
    nombre: 'Conjunto Vestido Negro + Torera Verde Agua',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro recto con torera verde agua. Combinación moderna y fácil de llevar.',
    imagenes: [CAT + 'BCN01.jpg'],
  },
  {
    slug: 'conjunto-cuadros-gris-torera-blanca',
    nombre: 'Conjunto Vestido Cuadros Gris + Torera Blanca',
    categoria: 'conjuntos',
    descripcion:
      'Vestido a cuadros grises con torera blanca. Look formal y atemporal de confección propia.',
    imagenes: [CAT + 'BBG01.jpg'],
  },
  {
    slug: 'conjunto-rosa-torera-estampada',
    nombre: 'Conjunto Vestido Rosa + Torera Estampada',
    categoria: 'conjuntos',
    descripcion:
      'Vestido rosa con falda en A y torera estampada en negro y rosa. Conjunto femenino y elegante.',
    imagenes: [CAT + 'BRN01.jpg'],
  },
  {
    slug: 'conjunto-negro-torera-encaje',
    nombre: 'Conjunto Vestido Negro + Torera Encaje',
    categoria: 'conjuntos',
    descripcion:
      'Vestido negro con torera de encaje en blanco y negro. Conjunto sofisticado para ocasiones especiales.',
    imagenes: [CAT + 'BNN01.jpg'],
    destacado: true,
  },
  {
    slug: 'conjunto-negro-torera-negra',
    nombre: 'Conjunto Vestido Negro + Torera Negra',
    categoria: 'conjuntos',
    descripcion:
      'Vestido de encaje sobre fondo claro con torera negra lisa. Elegancia clásica de confección nacional.',
    imagenes: [CAT + 'BNN02.jpg'],
  },
];

export const productosDestacados = productos.filter((p) => p.destacado);

export function productosPorCategoria(cat: Categoria): Producto[] {
  return productos.filter((p) => p.categoria === cat);
}

export function productoPorSlug(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}
