/**
 * Obtiene la posición del ratón relativa al lienzo SVG.
 *
 * @param {MouseEvent} event - Evento del ratón.
 * @returns {Object} Objeto con propiedades x e y.
 */
function getMousePos(event) {
  const CTM = svgCanvas.getScreenCTM();
  return {
    x: (event.clientX - CTM.e) / CTM.a,
    y: (event.clientY - CTM.f) / CTM.d
  };
}