/**
     * Mouse up event: stop drawing or transforming.
     */
    function onMouseUp(evt) {
      isDrawing = false;
      currentElement = null;

      isMoving = false;
      isRotating = false;
      isScaling = false;

      // Recompute bounding box if we have a selected element
      if (selectedElement) {
        updateBoundingBox();
      }
    }
