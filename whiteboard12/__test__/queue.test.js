'use strict';

const Queue = require('../lib/queue');

let test = new Queue;
let empty = new Queue;


describe('two queue', () => {
  test.enqueue(1);
  test.enqueue(2);
  test.enqueue(3);
  it('should add an item to the enqueuing stack', () => {
    expect(test.enqueue(10)).toBe('10 was added');
    expect(test.enqueue(200)).toBe('200 was added');
    expect(test.enqueue(3000)).toBe('3000 was added');
  });
 
});