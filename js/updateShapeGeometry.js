/**
 * Actualiza la geometría de la forma en construcción conforme progresa el dibujo.
 *
 * @param {Object} pos - Objeto con coordenadas x e y actuales.
 */
function updateShapeGeometry(pos) {
  if (!activeSVGElement) return;

  switch (selectedTool) {
    case 'rectangle': {
      const widthVal = pos.x - startX;
      const heightVal = pos.y - startY;
      activeSVGElement.setAttribute('width', Math.abs(widthVal));
      activeSVGElement.setAttribute('height', Math.abs(heightVal));
      activeSVGElement.setAttribute('x', (widthVal < 0) ? pos.x : startX);
      activeSVGElement.setAttribute('y', (heightVal < 0) ? pos.y : startY);
      break;
    }
    case 'circle': {
      const radius = calcDistance(pos.x, pos.y, startX, startY);
      activeSVGElement.setAttribute('r', radius);
      break;
    }
    case 'ellipse': {
      activeSVGElement.setAttribute('rx', Math.abs(pos.x - startX));
      activeSVGElement.setAttribute('ry', Math.abs(pos.y - startY));
      break;
    }
    case 'line': {
      activeSVGElement.setAttribute('x2', pos.x);
      activeSVGElement.setAttribute('y2', pos.y);
      break;
    }
    case 'polyline': {
      let pts = activeSVGElement.getAttribute('points');
      pts += ` ${pos.x},${pos.y}`;
      activeSVGElement.setAttribute('points', pts);
      break;
    }
    case 'polygon': {
      let ptsVal = activeSVGElement.getAttribute('points');
      ptsVal += ` ${pos.x},${pos.y}`;
      activeSVGElement.setAttribute('points', ptsVal);
      break;
    }
    case 'path': {
      let dAttr = activeSVGElement.getAttribute('d');
      dAttr += ` L ${pos.x} ${pos.y}`;
      activeSVGElement.setAttribute('d', dAttr);
      break;
    }
  }
}