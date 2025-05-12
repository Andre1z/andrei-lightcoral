/**
 * Transforma un punto (x, y) usando una matriz de transformación SVG.
 *
 * @param {number} x - Coordenada x.
 * @param {number} y - Coordenada y.
 * @param {SVGMatrix} m - Matriz de transformación.
 * @returns {Object} Objeto con las nuevas coordenadas x e y.
 */
function transformPoint(x, y, m) {
  return {
    x: m.a * x + m.c * y + m.e,
    y: m.b * x + m.d * y + m.f
  };
}