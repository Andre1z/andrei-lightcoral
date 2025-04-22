function getTranslation(el) {
      const transform = el.getAttribute('transform') || '';
      const match = /translate\(\s*([^\s,)]+)\s*,?\s*([^\s,)]+)/.exec(transform);
      if (match) {
        return {
          x: parseFloat(match[1]),
          y: parseFloat(match[2])
        };
      }
      return { x: 0, y: 0 };
    }
