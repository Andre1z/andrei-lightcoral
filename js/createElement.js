/**
 * Crea un nuevo elemento SVG en función de la herramienta seleccionada y la posición inicial.
 *
 * @param {Object} pos - Objeto con propiedades x e y.
 */
function createElementAt(pos) {
  switch (selectedTool) {
    case 'rectangle':
      activeSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      activeSVGElement.setAttribute('x', pos.x);
      activeSVGElement.setAttribute('y', pos.y);
      activeSVGElement.setAttribute('width', 0);
      activeSVGElement.setAttribute('height', 0);
      activeSVGElement.setAttribute('fill', '#ffffff');
      activeSVGElement.setAttribute('stroke', '#000000');
      svgCanvas.appendChild(activeSVGElement);
      break;
    case 'circle':
      activeSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      activeSVGElement.setAttribute('cx', pos.x);
      activeSVGElement.setAttribute('cy', pos.y);
      activeSVGElement.setAttribute('r', 0);
      activeSVGElement.setAttribute('fill', '#ffffff');
      activeSVGElement.setAttribute('stroke', '#000000');
      svgCanvas.appendChild(activeSVGElement);
      break;
    case 'ellipse':
      activeSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
      activeSVGElement.setAttribute('cx', pos.x);
      activeSVGElement.setAttribute('cy', pos.y);
      activeSVGElement.setAttribute('rx', 0);
      activeSVGElement.setAttribute('ry', 0);
      activeSVGElement.setAttribute('fill', '#ffffff');
      activeSVGElement.setAttribute('stroke', '#000000');
      svgCanvas.appendChild(activeSVGElement);
      break;
    case 'line':
      activeSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      activeSVGElement.setAttribute('x1', pos.x);
      activeSVGElement.setAttribute('y1', pos.y);
      activeSVGElement.setAttribute('x2', pos.x);
      activeSVGElement.setAttribute('y2', pos.y);
      activeSVGElement.setAttribute('stroke', '#000000');
      svgCanvas.appendChild(activeSVGElement);
      break;
    case 'polyline':
      activeSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      activeSVGElement.setAttribute('points', `${pos.x},${pos.y}`);
      activeSVGElement.setAttribute('fill', 'none');
      activeSVGElement.setAttribute('stroke', '#000000');
      svgCanvas.appendChild(activeSVGElement);
      break;
    case 'polygon':
      activeSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      activeSVGElement.setAttribute('points', `${pos.x},${pos.y}`);
      activeSVGElement.setAttribute('fill', '#ffffff');
      activeSVGElement.setAttribute('stroke', '#000000');
      svgCanvas.appendChild(activeSVGElement);
      break;
    case 'path':
      activeSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      activeSVGElement.setAttribute('d', `M ${pos.x} ${pos.y}`);
      activeSVGElement.setAttribute('fill', '#ffffff');
      activeSVGElement.setAttribute('stroke', '#000000');
      svgCanvas.appendChild(activeSVGElement);
      break;
  }
}