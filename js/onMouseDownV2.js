/**
 * Manejador del evento mousedown en el canvas SVG.
 * Inicia el dibujo o comienza el proceso de transformación según la herramienta activa.
 *
 * @param {MouseEvent} event - Evento del ratón.
 */
function handleMouseDown(event) {
  const pos = getMousePos(event);

  if (selectedTool !== 'select') {
    // Iniciar dibujo
    drawingActive = true;
    startX = pos.x;
    startY = pos.y;
    createElementAt(pos);
  } else {
    const targetElement = event.target;

    // Comprobar si se hizo clic en el manejador de rotación
    if (targetElement === rotateCircle) {
      rotatingActive = true;
      movingActive = false;
      scalingActive = false;
      initTransform.angle = getRotationVal(currentSelection);
      return;
    }
    // Comprobar si se hizo clic en el manejador de escalado
    if (targetElement === scaleSquare) {
      scalingActive = true;
      movingActive = false;
      rotatingActive = false;
      const scaleObj = getScaleVal(currentSelection);
      initTransform.sx = scaleObj.sx;
      initTransform.sy = scaleObj.sy;
      return;
    }
    // Si se clickeó sobre el bounding box o sobre el elemento seleccionado, se inicia movimiento
    if (targetElement === boundingRect || targetElement === currentSelection) {
      movingActive = true;
      scalingActive = false;
      rotatingActive = false;
      const trans = getTranslationVal(currentSelection);
      initTransform.tx = trans.x;
      initTransform.ty = trans.y;
      return;
    }
    // Si se hace clic en otro elemento SVG (no en el fondo ni en un manejador)
    if (targetElement.tagName !== 'svg' && !targetElement.classList.contains('handle')) {
      selectElement(targetElement);
    } else {
      deselectElement();
    }
  }
}