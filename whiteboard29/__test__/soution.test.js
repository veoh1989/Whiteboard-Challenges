'use strict';

const solution = require('../lib/solution.js');

// sortAnagrams(['acre', 'act', 'race', 'cat', 'tac', 'care'])
// => ['acre', 'care', 'race', 'act', 'cat', 'tac', ]

describe('Solution Module', function() {
  describe('#...', function() {
    it('should take in an array', function() {
      expect(solution.anagramsSol('string')).toBeNull();
      expect(solution.anagramsSol(['acre'])).toEqual(['acre']);
    });
    it('should return an error if nothing is passed as an argument', function() {
      expect(solution.anagramsSol()).toEqual('Error');
    });
    it('should return the array with sorted anagrams', function() {
      expect(solution.anagramsSol(['acre', 'act', 'race', 'cat', 'tac', 'care'])).toEqual(['acre', 'race', 'care', 'act', 'cat', 'tac']);
    });
    it('should remove anything that is not a string', function() {
      expect(solution.anagramsSol(['race', 'acre', 'act', 666, 'tac', true, 'cat'])).toEqual(['race', 'acre', 'act', 'tac', 'cat']);
    });
  });
});