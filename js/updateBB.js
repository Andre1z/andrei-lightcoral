/**
 * Recalcula y aplica las dimensiones y posición del bounding box y sus manejadores.
 */
function updateBB() {
  if (!currentSelection || !boundingRect) return;

  const box = currentSelection.getBBox();
  const mtx = currentSelection.getScreenCTM();
  let pointA = transformPoint(box.x, box.y, mtx);
  let pointB = transformPoint(box.x + box.width, box.y + box.height, mtx);

  pointA = transformPoint(pointA.x, pointA.y, svgCanvas.getScreenCTM().inverse());
  pointB = transformPoint(pointB.x, pointB.y, svgCanvas.getScreenCTM().inverse());

  const bbX = pointA.x;
  const bbY = pointA.y;
  const bbWidth = pointB.x - pointA.x;
  const bbHeight = pointB.y - pointA.y;

  boundingRect.setAttribute('x', bbX);
  boundingRect.setAttribute('y', bbY);
  boundingRect.setAttribute('width', bbWidth);
  boundingRect.setAttribute('height', bbHeight);

  // Colocar el manejador de rotación en la parte superior central
  rotateCircle.setAttribute('cx', bbX + bbWidth / 2);
  rotateCircle.setAttribute('cy', bbY - 20);
  // Colocar el manejador de escalado en la esquina inferior derecha
  scaleSquare.setAttribute('x', bbX + bbWidth - 5);
  scaleSquare.setAttribute('y', bbY + bbHeight - 5);

  // Actualizar el punto central (pivote)
  pivot.x = bbX + bbWidth / 2;
  pivot.y = bbY + bbHeight / 2;
}