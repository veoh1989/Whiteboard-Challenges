'use strict'

const solution = require('../lib/solution');

describe('Solution Module', function() {
  describe('#Solution', function() {
    it('expects the solution module argument to be a number', function() {
      expect(solution.loop('liza')).toBeNull();
    });

    it('expects the solution module argument cannot have a negative number', function() {
      expect(solution.loop(-1)).toBeNull();
    });

    it('should run and increment a variable count times', () => {
      let x = 0;
      solution.loop(2, () => x++);
      expect(x).toBe(2);
    });
  });
});