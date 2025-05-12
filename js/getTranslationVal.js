/**
 * Extrae la traslación (x, y) del atributo transform del elemento SVG.
 *
 * @param {SVGElement} el - Elemento SVG.
 * @returns {Object} Objeto con x e y.
 */
function getTranslationVal(el) {
  const trans = el.getAttribute('transform') || '';
  const res = /translate\(\s*([^\s,)]+)\s*,?\s*([^\s,)]+)/.exec(trans);
  return res ? { x: parseFloat(res[1]), y: parseFloat(res[2]) } : { x: 0, y: 0 };
}