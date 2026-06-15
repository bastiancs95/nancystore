export type Categoria = 'fiestas-patrias' | 'conjuntos' | 'accesorios';

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
  { id: 'fiestas-patrias', label: 'Fiestas Patrias' },
  { id: 'conjuntos', label: 'Conjuntos' },
  { id: 'accesorios', label: 'Accesorios' },
];

const FP = 'images/productos/fiestas-patrias/';
const CAT = 'images/productos/catalogo/';

export const productos: Producto[] = [
  // ───────────── Fiestas Patrias — Vestidos de huasa ─────────────
  {
    slug: 'vestido-huasa-rojo-copihue',
    nombre: 'Vestido de Huasa Rojo Copihue',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera roja y estampado de copihues, falda con vuelo y volante a juego. Confección propia en nuestro taller de Puerto Montt.',
    imagenes: [FP + 'VR01.jpg', FP + 'CR01.jpg'],
    destacado: true,
  },
  {
    slug: 'vestido-huasa-rojo-rosas',
    nombre: 'Vestido de Huasa Rojo Rosas',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera roja lisa y falda de rosas, terminada en volante rojo con cinta. Ideal para bailar cueca con elegancia.',
    imagenes: [FP + 'VR02.jpg'],
  },
  {
    slug: 'vestido-huasa-rojo-flores',
    nombre: 'Vestido de Huasa Rojo Flores',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera blanca de flores rojas y falda roja con volante floreado. Un clásico de las Fiestas Patrias.',
    imagenes: [FP + 'VR03.jpg'],
  },
  {
    slug: 'vestido-huasa-burdeo',
    nombre: 'Vestido de Huasa Burdeo',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china en tono burdeo con estampado de rosas y enagua de encaje blanco que asoma en el vuelo. Confección nacional.',
    imagenes: [FP + 'VR04.png'],
    nuevo: true,
  },
  {
    slug: 'vestido-huasa-coral',
    nombre: 'Vestido de Huasa Coral',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china en coral con pechera de rosas y falda con vuelo, pensado para lucir en la fonda. Hecho a mano en Puerto Montt.',
    imagenes: [FP + '002R.jpg'],
  },
  {
    slug: 'vestido-huasa-fucsia',
    nombre: 'Vestido de Huasa Fucsia',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china fucsia con estampado de rosas en blanco y negro, falda amplia y volante a tono. Color que destaca en cualquier baile.',
    imagenes: [FP + '001R.jpg'],
    destacado: true,
  },
  {
    slug: 'vestido-huasa-azul-rosas',
    nombre: 'Vestido de Huasa Azul Rosas',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china azul con delicado estampado de rosas celestes, falda con vuelo y volante azul. Confección propia.',
    imagenes: [FP + 'VA01.jpg', FP + 'CA01.jpg'],
  },
  {
    slug: 'vestido-huasa-azul-flores',
    nombre: 'Vestido de Huasa Azul Flores',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera azul y falda de rosas azules sobre fondo blanco, terminada en volante. Elegante y tradicional.',
    imagenes: [FP + 'VB01.jpg'],
  },
  {
    slug: 'vestido-huasa-azul-vuelo-blanco',
    nombre: 'Vestido de Huasa Azul con Enagua',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china azul con delantal floreado y enagua de encaje blanco con vuelo, perfecto para el zapateo de la cueca.',
    imagenes: [FP + '001A.jpg', FP + 'VA02.jpg'],
    destacado: true,
  },
  {
    slug: 'vestido-huasa-celeste',
    nombre: 'Vestido de Huasa Celeste',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china en celeste turquesa con estampado de rosas y volante a juego. Confección nacional en Puerto Montt.',
    imagenes: [FP + 'VC01.jpg'],
  },
  {
    slug: 'vestido-huasa-morado',
    nombre: 'Vestido de Huasa Morado',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china morado con delantal de flores y volante a tono, falda con mucho vuelo para lucir bailando.',
    imagenes: [FP + 'VM01.jpg', FP + '001M.jpg', FP + 'CM01.jpg'],
    destacado: true,
  },
  {
    slug: 'vestido-huasa-negro-flores',
    nombre: 'Vestido de Huasa Negro Flores',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera de flores en blanco y negro y delantal negro con volante floreado. Sobrio y elegante.',
    imagenes: [FP + 'VN01.jpg', FP + 'CN01.jpg'],
  },
  {
    slug: 'vestido-huasa-negro-blanco',
    nombre: 'Vestido de Huasa Blanco y Negro',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china con pechera negra y falda blanca de flores negras, terminada en volante. Un diseño atemporal.',
    imagenes: [FP + 'VN02.jpg', FP + 'CN02.jpg', FP + 'CN03.jpg'],
  },
  {
    slug: 'vestido-huasa-blanco-flores-negras',
    nombre: 'Vestido de Huasa Blanco Flores Negras',
    categoria: 'fiestas-patrias',
    descripcion:
      'Vestido de china blanco con flores negras en pechera y delantal negro con volante floreado. Confección propia.',
    imagenes: [FP + '001N.jpg'],
  },
  {
    slug: 'enagua-can-can',
    nombre: 'Enagua Can-Can',
    categoria: 'accesorios',
    descripcion:
      'Enagua de tul con tres vuelos y cinta de raso, para dar volumen a tu vestido de china. Complemento ideal para tu traje de huasa.',
    imagenes: [FP + 'VF01.jpg'],
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
