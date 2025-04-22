function scaleShape(mousePos) {
      // Distance from center to current mouse
      const dx = mousePos.x - center.x;
      const dy = mousePos.y - center.y;
      const newDist = Math.sqrt(dx * dx + dy * dy);

      // Distance from center to corner of bounding box at the start
      const bbox = selectedElement.getBBox();
      // Approx initial half-diagonal
      // We'll transform the bounding box center to screen coords
      const matrix = selectedElement.getScreenCTM();
      const centerScreen = ptTransform(bbox.x + bbox.width/2, bbox.y + bbox.height/2, matrix);
      const cornerScreen = ptTransform(bbox.x + bbox.width, bbox.y + bbox.height, matrix);
      const startDist = distance(centerScreen.x, centerScreen.y, cornerScreen.x, cornerScreen.y);

      // Ratio
      const scaleFactor = newDist / startDist;

      applyTransform(selectedElement, {
        x: getTranslation(selectedElement).x,
        y: getTranslation(selectedElement).y,
        rotation: getRotation(selectedElement),
        scaleX: startTransform.scaleX * scaleFactor,
        scaleY: startTransform.scaleY * scaleFactor
      });
    }
