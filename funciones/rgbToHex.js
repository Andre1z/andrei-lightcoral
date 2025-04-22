// Convert 'rgb(r,g,b)' or named color to hex
    function rgbToHex(color) {
      if (!color) return '#000000';
      const ctx = document.createElement('canvas').getContext('2d');
      ctx.fillStyle = color;
      return ctx.fillStyle.toLowerCase();
    }
