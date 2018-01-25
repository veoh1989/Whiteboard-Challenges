'use strict';

const findNth = require('../lib/solution');
const Node = require('../lib/nd');

describe('Solution Module', () => {
  describe('#FindNth', () => {
    it('should return null if n is not a number', () => {
      expect(findNth('this is not a number')).toBeNull();
    });

    it('should return correct output', () => {
  
    });

    // it('should return a new list when there are intersections', () => {
    //   let intersection = findNth(lista, listb);
    //   expect(intersection.value).toBe(3);
    // });
  });
});


