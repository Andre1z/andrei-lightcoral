/**
 * Mueve el elemento seleccionado en base al desplazamiento del ratón.
 *
 * @param {Object} pos - Objeto con posición x e y actuales.
 */
function moveElementTo(pos) {
  const deltaX = pos.x - startX;
  const deltaY = pos.y - startY;
  const newTx = initTransform.tx + deltaX;
  const newTy = initTransform.ty + deltaY;

  applyTransformV2(currentSelection, {
    tx: newTx,
    ty: newTy,
    angle: getRotationVal(currentSelection),
    sx: getScaleVal(currentSelection).sx,
    sy: getScaleVal(currentSelection).sy
  });
}