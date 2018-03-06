'use strict';

const solution = require('../lib/solution.js');

let testTreeOne = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 4,
    left: null,
    right: null
  }
}

let testTreeTwo = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null
  },
  right: {
    value: 3,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: null
  }
}

describe('Comparing Trees', () => {
  it('Should take in two arguments', () => {
    expect(solution.compare.length).toEqual(2);
  })
  it('Should return null if either argument is not a tree', () => {
    expect(solution.compare('testTreeOne', testTreeOne)).toBeNull();
    expect(solution.compare(testTreeOne, 'testTreeTwo')).toBeNull();
  })
  it('Should have a boolean output', () => {
    expect(typeof solution.compare(testTreeOne, testTreeTwo)).toEqual('boolean');
  })
  it('Should return the correct answer', () => {
    expect(solution.compare(testTreeOne, testTreeOne)).toEqual(true);
    expect(solution.compare(testTreeOne, testTreeTwo)).toEqual(false);
  })
})