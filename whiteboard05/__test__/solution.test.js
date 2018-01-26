'use strict';

const solution = require('../lib/solution');

let nodeObj = {value: 25, next: {value: 1, next: {value: 15, next: {value: 33, next: {value: 4, next: null}}}}};
let validObj = {next: {next: {next: null, value: 4}, value: 33}, value: 15}

describe('Solution Module', function() {
  describe('#Solution', function() {
    it('should return 15 and everything afterwards', function() {
      expect(solution.middle(nodeObj)).toEqual(validObj);
    });

    it('should return null if list is not an object', function() {
      expect(solution.middle(nodeObj)).toBeInstanceOf(Object);
      expect(solution.middle('this is a string')).toBeNull();
    });

    it('link must be a number', () => {
      expect(solution.middle('this is a string')).toBeNull();
    });

    it('link numbers cannot be negative', () => {
      expect(solution.middle(-3)).toBeNull();
    });
  });
});