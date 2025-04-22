// Transform a point (x, y) by an SVG matrix
    function ptTransform(x, y, matrix) {
      return {
        x: matrix.a * x + matrix.c * y + matrix.e,
        y: matrix.b * x + matrix.d * y + matrix.f
      };
    }
