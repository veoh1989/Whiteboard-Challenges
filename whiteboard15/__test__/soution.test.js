'use strict';

const solution = require('../lib/solution.js');
const Tree  = require('../lib/kary-tree');
require('jest');

let test = new Tree(1);
test.insert(2,1);
test.insert(9,1);
test.insert(3,2);
test.insert(4,3);

describe('#solution module', function() {
  it('should have an input', function() {
    expect(solution.tree('this is a string')).toBeNull();
  });
  it('should be correct output', function() {
    expect(solution.tree(test.root)).toEqual([4]);
  });
  it('should return null if root is not an object', function() {
    expect(solution.tree('test3')).toBeNull();
  });
});