/**
 * Aplica la transformación compuesta al elemento SVG.
 *
 * @param {SVGElement} elem - Elemento SVG a transformar.
 * @param {Object} opts - Objeto con propiedades: tx, ty, angle, sx, sy.
 */
function applyTransformV2(elem, opts) {
  const { tx, ty, angle, sx, sy } = opts;
  const tStr = `translate(${tx}, ${ty}) rotate(${angle}) scale(${sx}, ${sy})`;
  elem.setAttribute('transform', tStr);
}