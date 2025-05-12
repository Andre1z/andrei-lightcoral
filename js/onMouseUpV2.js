/**
 * Manejador del evento mouseup que finaliza el dibujo o la transformación.
 *
 * @param {MouseEvent} event - Evento del ratón.
 */
function handleMouseUp(event) {
  drawingActive = false;
  activeSVGElement = null;
  movingActive = false;
  rotatingActive = false;
  scalingActive = false;

  if (currentSelection) {
    updateBB();
  }
}