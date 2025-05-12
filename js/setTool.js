/**
 * Actualiza la herramienta activa del editor.
 *
 * @param {string} toolName - Nombre de la herramienta (por ejemplo, 'select', 'rectangle', etc.).
 */
function setTool(toolName) {
  selectedTool = toolName;
  svgCanvas.style.cursor = (toolName === 'select') ? 'default' : 'crosshair';
  if (toolName !== 'select') {
    deselectElement();
  }
}