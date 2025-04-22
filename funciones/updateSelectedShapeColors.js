// =================================================================================
    // COLOR UPDATES
    // =================================================================================
    function updateSelectedShapeColors() {
      if (!selectedElement) return;

      selectedElement.setAttribute('fill', fillColorInput.value);
      selectedElement.setAttribute('stroke', strokeColorInput.value);
    }
