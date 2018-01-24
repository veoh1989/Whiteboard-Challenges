'use strict';

const solution = require('../lib/solution');

let nodeObj = {value: 25, next: {value: 1, next: {value: 15, next: {value: 33, next: {value: 4, next: null}}}}};

describe('Solution Module', function() {
  describe('#Solution', function() {
    it('should return 15, next', function() {
      expect(solution.middle(nodeObj)).toBe(15);
    });

    // it('should return true if link is a circle', function() {
    //   nodeObj.next.next = nodeObj;
    //   expect(solution.circle(nodeObj)).toBe(true);
    // });

    // it('should return null if not an object', () => {
    //   expect(solution.circle('this is not an object!')).toBe(null);
    // });
  });
});