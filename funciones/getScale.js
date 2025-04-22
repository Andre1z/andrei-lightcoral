function getScale(el) {
      const transform = el.getAttribute('transform') || '';
      const match = /scale\(\s*([^\s,)]+)\s*,?\s*([^\s,)]+)/.exec(transform);
      if (match) {
        return {
          scaleX: parseFloat(match[1]),
          scaleY: parseFloat(match[2])
        };
      }
      // if there's a single scale, it's scale(s, s)
      const matchSingle = /scale\(\s*([^\s,)]+)/.exec(transform);
      if (matchSingle) {
        const s = parseFloat(matchSingle[1]);
        return { scaleX: s, scaleY: s };
      }
      return { scaleX: 1, scaleY: 1 };
    }
