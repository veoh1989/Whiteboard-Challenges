'use strict';

const solution = require('../lib/solution.js');
require('jest');


let test = [1,2,4,5,6,7,8,9,10];
let test2 = [1,2,4,5,6,7,8,9,10,11,12,14,15,16,18];
let test3 = [];
for (let i=1; i <= 100; i++) {
  test3.push(i);
}
test3.splice(50, 1);


describe('#solution module', function() {
  it('should have an input', function() {
    expect(solution.calculateMissing()).toBe(null);
  });
  it('should be correct input', function() {
    expect(solution.calculateMissing(123)).toBe(null);
    expect(solution.calculateMissing('test')).toBe(null);
  });
  it('checks to see if its the right answer', function() {
    expect(solution.calculateMissing(test)).toEqual([3]);
    expect(solution.calculateMissing(test2)).toEqual([3,13,17]);
  });
  it('should be the correct output for an array of 100', function() {
    expect(solution.calculateMissing(test3)).toEqual([51]);
  });
});