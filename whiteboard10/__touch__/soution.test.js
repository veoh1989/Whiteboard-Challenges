'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('#binarySearch', () => {
    it('should return the correct output', () => {
      expect(solution.binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe('Your item 6 is at index 5.');
    });

    it('second argument should be a number', () => {
      expect(solution.binarySearch([1, 2, 3, 4, 5, 6], '9')).toBe('Invalid argument.');
    });

    it('second argument should be a number', () => {
      expect(solution.binarySearch('[1, 2, 3, 4, 5, 6]', 9)).toBe('Invalid argument.');
    });
  });
});