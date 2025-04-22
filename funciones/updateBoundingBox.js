// Calculate bounding box and position handles
    function updateBoundingBox() {
      if (!selectedElement || !bboxRect) return;

      // Use getBBox() to find the "raw" bounding box, then account for transforms
      const bbox = selectedElement.getBBox();

      // Compute the element’s transform matrix
      const matrix = selectedElement.getScreenCTM();
      // We'll use an inverse transform to place the bounding box in SVG coordinates
      const parentCTM = svg.getScreenCTM().inverse();

      // Top-left corner in screen coords
      let topLeft = ptTransform(bbox.x, bbox.y, matrix);
      // Bottom-right corner in screen coords
      let bottomRight = ptTransform(bbox.x + bbox.width, bbox.y + bbox.height, matrix);

      // Convert these points back to local SVG coords
      topLeft = ptTransform(topLeft.x, topLeft.y, parentCTM);
      bottomRight = ptTransform(bottomRight.x, bottomRight.y, parentCTM);

      const boxX = topLeft.x;
      const boxY = topLeft.y;
      const boxW = bottomRight.x - topLeft.x;
      const boxH = bottomRight.y - topLeft.y;

      // Update bounding box position & size
      bboxRect.setAttribute('x', boxX);
      bboxRect.setAttribute('y', boxY);
      bboxRect.setAttribute('width', boxW);
      bboxRect.setAttribute('height', boxH);

      // Place rotate handle at top center
      rotateHandle.setAttribute('cx', boxX + boxW / 2);
      rotateHandle.setAttribute('cy', boxY - 20); // 20px above the box

      // Place scale handle at bottom-right
      scaleHandle.setAttribute('x', boxX + boxW - 5); // half of 10 wide
      scaleHandle.setAttribute('y', boxY + boxH - 5); // half of 10 high

      // Calculate the center for rotation/scale
      center.x = boxX + boxW / 2;
      center.y = boxY + boxH / 2;
    }
