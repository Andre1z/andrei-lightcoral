// Remove bounding box + handles
    function removeBoundingBox() {
      if (bboxRect) {
        svg.removeChild(bboxRect);
        bboxRect = null;
      }
      if (rotateHandle) {
        svg.removeChild(rotateHandle);
        rotateHandle = null;
      }
      if (scaleHandle) {
        svg.removeChild(scaleHandle);
        scaleHandle = null;
      }
    }
