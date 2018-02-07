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

let expected = {children: [{children: [], value: 7}, {children: [], value: 8}, {children: [], value: 9}], value: 4};

describe('#solution module', function() {
  it('should have an input', function() {
    expect(solution.findLarge('this is a string')).toBeNull();
  });
  it('should be correct output', function() {
    expect(solution.findLarge(test.root).value).toEqual(4);
    expect(solution.findLarge(test.root)).toEqual(expected);

  });
  it('should return null if root is not an object', function() {
    expect(solution.findLarge('test')).toBeNull();
  });
});