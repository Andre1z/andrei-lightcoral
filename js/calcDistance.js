/**
 * Calcula la distancia euclidiana entre dos puntos.
 *
 * @param {number} x1 - Coordenada x del primer punto.
 * @param {number} y1 - Coordenada y del primer punto.
 * @param {number} x2 - Coordenada x del segundo punto.
 * @param {number} y2 - Coordenada y del segundo punto.
 * @returns {number} Distancia entre ambos puntos.
 */
function calcDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}