/**
 * Crea el bounding box y los manejadores de transformación para el elemento seleccionado.
 */
function createBB() {
  // Crear el rectángulo del bounding box
  boundingRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  boundingRect.setAttribute('class', 'bounding-box');
  boundingRect.style.pointerEvents = 'all';
  svgCanvas.appendChild(boundingRect);

  // Manejador de rotación (círculo)
  rotateCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  rotateCircle.setAttribute('class', 'handle rotate-handle');
  rotateCircle.setAttribute('r', 6);
  svgCanvas.appendChild(rotateCircle);

  // Manejador de escalado (cuadrado)
  scaleSquare = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  scaleSquare.setAttribute('class', 'handle');
  scaleSquare.setAttribute('width', 10);
  scaleSquare.setAttribute('height', 10);
  svgCanvas.appendChild(scaleSquare);
}