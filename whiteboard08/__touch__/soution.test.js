'use strict';

const listIntersection = require('../lib/solution');
const Node = require('../lib/nd');

describe('Solution Module', () => {
  describe('#listIntersection', () => {
    it('should throw an error if either list a or list b is falsey', () => {
      expect(() => listIntersection(new Node(10), null)).toThrow('Error');
      expect(() => listIntersection(null, new Node(10))).toThrow('Error');
    });

   
  });
});