// =================================================================================
    // SELECTION & BOUNDING BOX
    // =================================================================================
    function selectShape(shape) {
      // Deselect previous
      deselectShape();

      selectedElement = shape;
      // Bring selected shape to front
      svg.appendChild(selectedElement);

      // Create bounding box + handles
      createBoundingBox();
      updateBoundingBox();

      // Set color pickers to shape's current colors (if any)
      fillColorInput.value = rgbToHex(selectedElement.getAttribute('fill') || '#ffffff');
      strokeColorInput.value = rgbToHex(selectedElement.getAttribute('stroke') || '#000000');
    }
