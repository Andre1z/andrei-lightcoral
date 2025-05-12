/**
 * Escala el elemento seleccionado basándose en la distancia actual desde el pivote.
 *
 * @param {Object} pos - Objeto con la posición actual (x, y) del ratón.
 */
function scaleElementTo(pos) {
  const dx = pos.x - pivot.x;
  const dy = pos.y - pivot.y;
  const currentDist = Math.sqrt(dx * dx + dy * dy);

  const box = currentSelection.getBBox();
  const mtx = currentSelection.getScreenCTM();
  const centerScreen = transformPoint(box.x + box.width / 2, box.y + box.height / 2, mtx);
  const cornerScreen = transformPoint(box.x + box.width, box.y + box.height, mtx);
  const initialDist = calcDistance(centerScreen.x, centerScreen.y, cornerScreen.x, cornerScreen.y);
  const scaleFactor = currentDist / initialDist;

  applyTransformV2(currentSelection, {
    tx: getTranslationVal(currentSelection).x,
    ty: getTranslationVal(currentSelection).y,
    angle: getRotationVal(currentSelection),
    sx: initTransform.sx * scaleFactor,
    sy: initTransform.sy * scaleFactor
  });
}