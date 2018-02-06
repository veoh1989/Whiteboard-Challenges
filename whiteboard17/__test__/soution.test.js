'use strict';

const solution = require('../lib/solution.js');
const Tree  = require('../lib/kary-tree');
require('jest');

let test = new Tree();
test.insert(2);
test.insert(3,2);
// test.insert(3,2);
// test.insert(4,3);

describe('#solution module', function() {
  it('should have an input', function() {
    expect(solution.findSum('this is a string')).toBeNull();
  });
  it('should be correct output', function() {
    expect(solution.findSum(test.root)).toEqual(5);
  });
  it('should return null if root is not an object', function() {
    expect(solution.findSum('test3')).toBeNull();
  });
});