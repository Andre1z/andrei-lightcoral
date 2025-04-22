// =================================================================================
    // TRANSFORM OPERATIONS: MOVE / ROTATE / SCALE
    // =================================================================================
    function moveShape(mousePos) {
      // The offset from the original click
      const dx = mousePos.x - startX;
      const dy = mousePos.y - startY;
      
      // The new translation
      const newX = startTransform.x + dx;
      const newY = startTransform.y + dy;

      // Update the shape’s transform
      applyTransform(selectedElement, {
        x: newX,
        y: newY,
        rotation: getRotation(selectedElement),
        scaleX: getScale(selectedElement).scaleX,
        scaleY: getScale(selectedElement).scaleY
      });
    }
