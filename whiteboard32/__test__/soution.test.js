'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#iteratively', function() {
    it('should return return the correct index', function() {
      expect(solution.iteratively(4)).toBe(3);
    });
    it('index should be a number', function() {
      expect(solution.iteratively('string')).toBeNull();
    });
    it('should return return the correct index', function() {
      expect(solution.recursively(4)).toBe(3);
    });
    it('index should be a number', function() {
      expect(solution.iteratively('string')).toBeNull();
    });
  });
});