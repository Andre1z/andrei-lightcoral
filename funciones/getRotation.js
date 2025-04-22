function getRotation(el) {
      const transform = el.getAttribute('transform') || '';
      const match = /rotate\(\s*([^\s,)]+)/.exec(transform);
      if (match) {
        return parseFloat(match[1]);
      }
      return 0;
    }
