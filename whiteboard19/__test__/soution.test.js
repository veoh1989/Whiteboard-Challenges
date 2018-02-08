'use strict';

const solution = require('../lib/solution.js');
const Tree  = require('../lib/kary-tree');
require('jest');

let test = new Tree();
test.insert(2);
test.insert(3,2);
test.insert(4,2);
test.insert(5,3);
test.insert(6,3);
test.insert(7,4);
test.insert(8,4);
test.insert(9,4);

let expected =  {'head': {'next': {'next': {'next': {'next': {'next': {'next': {'next': {'next': null, 'value': 9}, 'value': 8}, 'value': 7}, 'value': 6}, 'value': 5}, 'value': 4}, 'value': 3}, 'value': 2}}


describe('#solution module', function() {
  it('should have an input', function() {
    expect(solution.flatten('this is a string')).toBeNull();
  });
  it('should be correct output', function() {
    expect(solution.flatten(test.root)).toEqual(expected);
  });
  it('should return null if root is not an object', function() {
    expect(solution.flatten('test')).toBeNull();
  });
});