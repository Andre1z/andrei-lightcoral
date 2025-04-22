function rotateShape(mousePos) {
      // angle from center
      const angleRad = Math.atan2(mousePos.y - center.y, mousePos.x - center.x);
      let angleDeg = (angleRad * 180) / Math.PI;
      // Convert to 0-360 if needed
      angleDeg = angleDeg < 0 ? angleDeg + 360 : angleDeg;

      applyTransform(selectedElement, {
        x: getTranslation(selectedElement).x,
        y: getTranslation(selectedElement).y,
        rotation: angleDeg,
        scaleX: getScale(selectedElement).scaleX,
        scaleY: getScale(selectedElement).scaleY
      });
    }
