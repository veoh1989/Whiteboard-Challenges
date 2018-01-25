'use strict';

const findNth = require('../lib/solution');

let nodeObj = {head: {value: 4, next: {value: 3, next: {value: 2, next: {value: 1, next: {value: 0, next: null}}}}}};
let validObj = {next: {next: {next: {next: null, value: 0}, value: 1}, value: 2}, value: 3};

describe('Solution Module', () => {
  describe('#FindNth', () => {
    it('should return null if n is not a number', () => {
      expect(findNth('this is not a number')).toBeNull();
    });

    it('should return correct output', () => {
      expect(findNth(3, nodeObj)).toEqual(validObj);
    });

    it('should return a null if offset is out of range', () => {
      expect(findNth(9, nodeObj)).toBeNull();
    });
  });
});