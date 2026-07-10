export const WHATSAPP_PRINCIPAL = '56984159252';

export const WHATSAPP_NUMEROS = [
  { numero: '56984159252', display: '+56 9 8415 9252', etiqueta: 'Principal' },
  { numero: '56965812342', display: '+56 9 6581 2342', etiqueta: 'Alternativo' },
  { numero: '56985925612', display: '+56 9 8592 5612', etiqueta: 'Alternativo' },
];

export function waLink(mensaje: string, numero: string = WHATSAPP_PRINCIPAL): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
