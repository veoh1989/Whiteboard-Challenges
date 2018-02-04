'use strict';

const Queue = require('../lib/queue');

let test = new Queue;

describe('two queue', () => {
  it('should add an item to the enqueuing stack', () => {
    expect(test.enqueue(10)).toBe('10 was added');
    expect(test.enqueue(200)).toBe('200 was added');
    expect(test.enqueue(3000)).toBe('3000 was added');
  });
  it('should remove from the dequeue stack', () => {
    expect(test.dequeue(10)).toEqual(10);
    expect(test.dequeue(200)).toEqual(200);
  });
  it('should expect numbers only', () => {
    expect(test.enqueue(null)).toBe('Cannot be null');
  });
});