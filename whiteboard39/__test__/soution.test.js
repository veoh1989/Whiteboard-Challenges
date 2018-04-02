'use strict';

const convert = require('../lib/solution.js');

let tree = {
  root: {
    value: 6,
    left: {
      value: 2,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
};

describe('converting trees to singly linked lists', () => {
  it('should take one argument', () => {
    expect(convert.length).toEqual(1);
  });
  it('should return null the argument is not a tree', () => {
    expect(convert('tree')).toBeNull();
  });
  it('should return the correct answer', () => {
    expect(convert(tree)).toEqual(3);
  });
});
