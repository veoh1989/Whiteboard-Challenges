'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#solution', function() {
    it('should return the sum of the base and expo', function() {
      expect(solution.sum(2,15)).toBe(26);
    });
    it('base should be a number', function() {
      expect(solution.sum('string',15)).toBe('Must be a number');
    });
    it('expo should be a number', function() {
      expect(solution.sum(2,'string')).toBe('Must be a number');
    });
  });
});