/**
 * Actualiza los atributos de color (fill y stroke) del elemento seleccionado.
 */
function applyNewColors() {
  if (!currentSelection) return;
  currentSelection.setAttribute('fill', inputFill.value);
  currentSelection.setAttribute('stroke', inputStroke.value);
}