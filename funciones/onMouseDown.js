/**
     * Mouse down event: either start drawing or attempt to select a shape.
     */
   function onMouseDown(evt) {
      const pos = getMousePosition(evt);

      if (currentTool !== 'select') {
        // START DRAWING
        isDrawing = true;
        startX = pos.x;
        startY = pos.y;
        createShape(pos);
      } else {
        // SELECT / TRANSFORM LOGIC
        // Check if the user clicked on a handle or shape or outside
        const target = evt.target;

        // If user clicked on rotate handle
        if (target === rotateHandle) {
          isRotating = true;
          isMoving = false;
          isScaling = false;
          // Save the initial rotation
          startTransform.rotation = getRotation(selectedElement);
          return;
        }

        // If user clicked on scale handle
        if (target === scaleHandle) {
          isScaling = true;
          isMoving = false;
          isRotating = false;
          // Save the initial scale
          const { scaleX, scaleY } = getScale(selectedElement);
          startTransform.scaleX = scaleX;
          startTransform.scaleY = scaleY;
          return;
        }

        // If user clicked on the bboxRect (or the shape), move
        if (target === bboxRect || target === selectedElement) {
          isMoving = true;
          isScaling = false;
          isRotating = false;
          // Save the initial translation
          const { x, y } = getTranslation(selectedElement);
          startTransform.x = x;
          startTransform.y = y;
          return;
        }

        // Otherwise, check if clicked on another shape
        if (target.tagName !== 'svg' && target.classList.contains('handle') === false) {
          // We clicked on some shape
          selectShape(target);
        } else {
          // Clicked on empty area
          deselectShape();
        }
      }
    }
