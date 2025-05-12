/**
 * Deselecciona el elemento SVG actualmente seleccionado y elimina su bounding box.
 */
function deselectElement() {
  currentSelection = null;
  removeBB();
}