/**
     * Sets the current tool and updates cursor, etc.
     */
    function setCurrentTool(tool) {
      currentTool = tool;
      svg.style.cursor = (tool === 'select') ? 'default' : 'crosshair';
      // Clear selection if we're switching tools
      if (tool !== 'select') {
        deselectShape();
      }
    }
