'use strict';

const solution = require('../lib/solution');

let nodeObj =
{value: 1, next: {value:2, next:{ value: 3, next: null}}};

describe('Solution Module', function() {
  describe('#Solution', function() {
    it('should return false if link is a straight line', function() {
      expect(solution.circle(nodeObj)).toBe(false);
    });

    it('should return true if link is a circle', function() {
      nodeObj.next.next = nodeObj;
      expect(solution.circle(nodeObj)).toBe(true);
    });

    it('should be an object', () => {
      expect(solution.circle('stringstuff')).toBe(null);
    });
  });
});