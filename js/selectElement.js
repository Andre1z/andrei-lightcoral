/**
 * Selecciona un elemento SVG para edición.
 *
 * @param {SVGElement} element - Elemento a seleccionar.
 */
function selectElement(element) {
  // Deselecciona cualquier selección previa
  deselectElement();
  currentSelection = element;
  // Mover el elemento seleccionado al frente del lienzo
  svgCanvas.appendChild(currentSelection);
  createBB();
  updateBB();
  // Actualiza los inputs con los colores actuales del elemento
  inputFill.value = convertRgbToHex(currentSelection.getAttribute('fill') || '#ffffff');
  inputStroke.value = convertRgbToHex(currentSelection.getAttribute('stroke') || '#000000');
}