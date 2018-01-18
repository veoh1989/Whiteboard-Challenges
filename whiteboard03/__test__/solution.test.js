'use strict';

const solution = require('../lib/solution');

describe('Solution Module', function() {
  describe('#Solution', function() {
    var x = ["mike", "sue", "tom", "kathy", "henry"]
    var y = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"]
    it('expects the solution module to return null when supplied string values ', function() {
      expect(solution(x,y)).toBe(null);
    });

    it('expects the solution module to be an array', function() {
      expect(solution('puppies')).toBe(null);
    });

    it('expects the solution module to have max and runnerUp', function() {
      expect(solution([1, 2, 3, 4, 5, 5])).toEqual({max: 5, runnerUp: 4});
    });

    it('expects the solution module to not contain only two numbers', function() {
      expect(solution([])).toBe(null);
      expect(solution([1])).toBe(null);
    });
  });
