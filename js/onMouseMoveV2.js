/**
 * Manejador del evento mousemove para actualizar en tiempo real
 * el dibujo o la transformación del elemento seleccionado.
 *
 * @param {MouseEvent} event - Evento del ratón.
 */
function handleMouseMove(event) {
  const pos = getMousePos(event);

  if (drawingActive && activeSVGElement) {
    updateShapeGeometry(pos);
  }

  if (currentSelection) {
    if (movingActive) {
      moveElementTo(pos);
    }
    if (rotatingActive) {
      rotateElementTo(pos);
    }
    if (scalingActive) {
      scaleElementTo(pos);
    }
  }
}