/**
 * Rota el elemento seleccionado en función de la posición actual del ratón.
 *
 * @param {Object} pos - Objeto con las coordenadas del ratón.
 */
function rotateElementTo(pos) {
  const rad = Math.atan2(pos.y - pivot.y, pos.x - pivot.x);
  let deg = rad * 180 / Math.PI;
  deg = (deg < 0) ? deg + 360 : deg;

  applyTransformV2(currentSelection, {
    tx: getTranslationVal(currentSelection).x,
    ty: getTranslationVal(currentSelection).y,
    angle: deg,
    sx: getScaleVal(currentSelection).sx,
    sy: getScaleVal(currentSelection).sy
  });
}