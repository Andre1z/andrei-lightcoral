function updateShape(pos) {
      if (!currentElement) return;
      
      switch (currentTool) {
        case 'rect': {
          const rectWidth = pos.x - startX;
          const rectHeight = pos.y - startY;
          currentElement.setAttribute('width', Math.abs(rectWidth));
          currentElement.setAttribute('height', Math.abs(rectHeight));
          currentElement.setAttribute('x', (rectWidth < 0) ? pos.x : startX);
          currentElement.setAttribute('y', (rectHeight < 0) ? pos.y : startY);
          break;
        }
        case 'circle': {
          const r = distance(pos.x, pos.y, startX, startY);
          currentElement.setAttribute('r', r);
          break;
        }
        case 'ellipse': {
          const rx = Math.abs(pos.x - startX);
          const ry = Math.abs(pos.y - startY);
          currentElement.setAttribute('rx', rx);
          currentElement.setAttribute('ry', ry);
          break;
        }
        case 'line': {
          currentElement.setAttribute('x2', pos.x);
          currentElement.setAttribute('y2', pos.y);
          break;
        }
        case 'polyline': {
          let existingPoints = currentElement.getAttribute('points');
          existingPoints += ` ${pos.x},${pos.y}`;
          currentElement.setAttribute('points', existingPoints);
          break;
        }
        case 'polygon': {
          let existingPolyPoints = currentElement.getAttribute('points');
          existingPolyPoints += ` ${pos.x},${pos.y}`;
          currentElement.setAttribute('points', existingPolyPoints);
          break;
        }
        case 'path': {
          let d = currentElement.getAttribute('d');
          d += ` L ${pos.x} ${pos.y}`;
          currentElement.setAttribute('d', d);
          break;
        }
      }
    }
