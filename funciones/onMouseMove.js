/**
     * Mouse move event: either update the shape being drawn or transform.
     */
    function onMouseMove(evt) {
      const pos = getMousePosition(evt);

      // DRAWING
      if (isDrawing && currentElement) {
        updateShape(pos);
      }

      // TRANSFORMING
      if (selectedElement) {
        if (isMoving) {
          moveShape(pos);
        }
        if (isRotating) {
          rotateShape(pos);
        }
        if (isScaling) {
          scaleShape(pos);
        }
      }
    }

