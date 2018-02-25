'use strict';

const solution = require('../lib/solution.js');

describe('Solution Module', function() {
  describe('#rotate', function() {
    it('should return the array rotated', function() {
      expect(solution.rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9],
      ])).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    });

    it('should return null when the array is not 2-dimensional', function() {
      expect(solution.rotate([[7, 4, 1], [8, 5, 2],
      ])).toEqual(null);
    });

    it('should return an array of strings rotated 90 degrees clockwise', function() {
      expect(solution.rotate([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'],
      ])).toEqual([['g', 'd', 'a'], ['h', 'e', 'b'], ['i', 'f', 'c']]);
    });
    it('should return null if nothing is passed as an arugment', function() {
      expect(solution.rotate()).toEqual(null);
    });
  });
});