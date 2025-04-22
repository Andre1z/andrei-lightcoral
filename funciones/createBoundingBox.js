// Create the bounding box + handles (hidden initially)
    function createBoundingBox() {
      bboxRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      bboxRect.setAttribute('class', 'bbox');
      // We want the bbox to be "interactive" for moving
      bboxRect.style.pointerEvents = 'all';
      svg.appendChild(bboxRect);

      // Rotate handle (circle)
      rotateHandle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      rotateHandle.setAttribute('class', 'handle rotate-handle');
      rotateHandle.setAttribute('r', 6);
      svg.appendChild(rotateHandle);

      // Scale handle (square)
      scaleHandle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      scaleHandle.setAttribute('class', 'handle');
      scaleHandle.setAttribute('width', 10);
      scaleHandle.setAttribute('height', 10);
      svg.appendChild(scaleHandle);
    }
