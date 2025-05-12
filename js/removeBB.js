/**
 * Elimina el bounding box y los manejadores del SVG.
 */
function removeBB() {
  if (boundingRect) {
    svgCanvas.removeChild(boundingRect);
    boundingRect = null;
  }
  if (rotateCircle) {
    svgCanvas.removeChild(rotateCircle);
    rotateCircle = null;
  }
  if (scaleSquare) {
    svgCanvas.removeChild(scaleSquare);
    scaleSquare = null;
  }
}