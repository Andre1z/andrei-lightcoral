// =================================================================================
    // SHAPE CREATION & UPDATE
    // =================================================================================
    function createShape(pos) {
      switch (currentTool) {
        case 'rect':
          currentElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          currentElement.setAttribute('x', pos.x);
          currentElement.setAttribute('y', pos.y);
          currentElement.setAttribute('width', 0);
          currentElement.setAttribute('height', 0);
          currentElement.setAttribute('fill', '#ffffff');
          currentElement.setAttribute('stroke', '#000000');
          svg.appendChild(currentElement);
          break;
        case 'circle':
          currentElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          currentElement.setAttribute('cx', pos.x);
          currentElement.setAttribute('cy', pos.y);
          currentElement.setAttribute('r', 0);
          currentElement.setAttribute('fill', '#ffffff');
          currentElement.setAttribute('stroke', '#000000');
          svg.appendChild(currentElement);
          break;
        case 'ellipse':
          currentElement = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
          currentElement.setAttribute('cx', pos.x);
          currentElement.setAttribute('cy', pos.y);
          currentElement.setAttribute('rx', 0);
          currentElement.setAttribute('ry', 0);
          currentElement.setAttribute('fill', '#ffffff');
          currentElement.setAttribute('stroke', '#000000');
          svg.appendChild(currentElement);
          break;
        case 'line':
          currentElement = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          currentElement.setAttribute('x1', pos.x);
          currentElement.setAttribute('y1', pos.y);
          currentElement.setAttribute('x2', pos.x);
          currentElement.setAttribute('y2', pos.y);
          currentElement.setAttribute('stroke', '#000000');
          svg.appendChild(currentElement);
          break;
        case 'polyline':
          currentElement = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
          currentElement.setAttribute('points', `${pos.x},${pos.y}`);
          currentElement.setAttribute('fill', 'none');
          currentElement.setAttribute('stroke', '#000000');
          svg.appendChild(currentElement);
          break;
        case 'polygon':
          currentElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
          currentElement.setAttribute('points', `${pos.x},${pos.y}`);
          currentElement.setAttribute('fill', '#ffffff');
          currentElement.setAttribute('stroke', '#000000');
          svg.appendChild(currentElement);
          break;
        case 'path':
          currentElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          currentElement.setAttribute('d', `M ${pos.x} ${pos.y}`);
          currentElement.setAttribute('fill', '#ffffff');
          currentElement.setAttribute('stroke', '#000000');
          svg.appendChild(currentElement);
          break;
      }
    }
