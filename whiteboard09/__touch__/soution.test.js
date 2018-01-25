'use strict';

const listIntersection = require('../lib/solution');
const Node = require('../lib/nd');

describe('Solution Module', () => {
  describe('#listIntersection', () => {
    it('should throw an error if either list a or list b is falsey', () => {
      expect(() => listIntersection(new Node(10), null)).toThrow('Error');
      expect(() => listIntersection(null, new Node(10))).toThrow('Error');
    });

    it('should return null if there are no intersections in the list', () => {
      let lista = new Node(3);
      let n = new Node(2);
      n.next = lista;
      lista = n;
      n = new Node(1);
      n.next = lista;
      lista = n;

      let listb = new Node(4);
      n = new Node(5);
      n.next = listb;
      listb = n;
      n = new Node(6);
      n.next = listb;
      listb = n;

      expect(listIntersection(lista, listb)).toBeNull();
    });

    it('should return a new list when there are intersections', () => {
      let lista = new Node(3);
      let n = new Node(2);
      n.next = lista;
      lista = n;
      n = new Node(1);
      n.next = lista;
      lista = n;

      let listb = new Node(9);
      n = new Node(8);
      n.next = listb;
      listb = n;
      n = new Node(3);
      n.next = listb;
      listb = n;

      let intersection = listIntersection(lista, listb);
      expect(intersection.value).toBe(3);
    });
  });
});