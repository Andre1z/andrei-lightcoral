/**
 * Extrae el factor de escala del elemento SVG.
 *
 * @param {SVGElement} el - Elemento SVG.
 * @returns {Object} Objeto con propiedades sx y sy.
 */
function getScaleVal(el) {
  const trans = el.getAttribute('transform') || '';
  let res = /scale\(\s*([^\s,)]+)\s*,?\s*([^\s,)]+)/.exec(trans);
  if (res) {
    return { sx: parseFloat(res[1]), sy: parseFloat(res[2]) };
  }
  const singleScale = /scale\(\s*([^\s,)]+)/.exec(trans);
  if (singleScale) {
    const s = parseFloat(singleScale[1]);
    return { sx: s, sy: s };
  }
  return { sx: 1, sy: 1 };
}