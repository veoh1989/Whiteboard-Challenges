'use strict';

const solution = require('../lib/solution');

describe('Solution Module', () => {
  describe('#binarySearch', () => {
    it('should return the correct output', () => {
      expect(solution.binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe('Your item 6 is at index 5.');
    });

    // it('should return correct output', () => {
    //   expect(binarySearch(3, nodeObj)).toEqual(validObj);
    // });

    // it('should return a null if offset is out of range', () => {
    //   expect(binarySearch(9, nodeObj)).toBeNull();
    // });
  });
});