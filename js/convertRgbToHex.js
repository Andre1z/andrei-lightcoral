/**
 * Convierte un color (en nombre o formato RGB) a hexadecimal.
 *
 * @param {string} clr - Color en formato 'rgb(r, g, b)' o nombre de color.
 * @returns {string} Color en formato hexadecimal.
 */
function convertRgbToHex(clr) {
  if (!clr) return '#000000';
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = clr;
  return ctx.fillStyle.toLowerCase();
}