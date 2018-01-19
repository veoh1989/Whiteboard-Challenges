'use strict';

const solution = require('../lib/solution');
require('jest');

describe ('solution module', function () {
  let one = ['mike', 'sue', 'tom', 'kathy', 'henry'];
  let two = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];
  let expectedArray = ['sue', 'kathy'];
  let oneWrong = [1, 'sue', 'tom', 'kathy', 'henry'];
  let twoWrong = [1, 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];
  describe ('#solution intersections', function () {
    it ('the solution module should return an array with the intersections', function () {
      expect (solution.final(one, two)).toEqual(expectedArray);
    });

    it ('the solution module should return an array', function () {
      expect(solution.final(one, two)).toBeInstanceOf(Array);
    });

    it('expects the solution module to not contain only two strings', function() {
      expect(solution.final(oneWrong, twoWrong)).toBe(null);
    });

    it('expects the solution module to not not be null', function() {
      expect(solution.final(one, two)).not.toBe(null);
    });
  });
});