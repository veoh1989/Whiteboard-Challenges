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

    


  });
});