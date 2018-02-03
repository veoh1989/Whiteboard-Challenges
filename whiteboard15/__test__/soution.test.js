'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('#solution module', function() {
  it('should have an input', function() {
    expect(solution.tree()).toBe(null);
  });
  it('should be correct out', function() {
    expect(solution.tree(123)).toBe(null);
    expect(solution.tree('test')).toBe(null);
  });
  it('should add only null children', function() {
    expect(solution.tree(test3)).toEqual([51]);
  });
});