/**
 * Extrae el ángulo de rotación (en grados) del atributo transform del elemento SVG.
 *
 * @param {SVGElement} el - Elemento SVG.
 * @returns {number} Ángulo de rotación.
 */
function getRotationVal(el) {
  const trans = el.getAttribute('transform') || '';
  const res = /rotate\(\s*([^\s,)]+)/.exec(trans);
  return res ? parseFloat(res[1]) : 0;
}