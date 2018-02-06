'use strict';

const Queue = require('./queue');
const solution = module.exports = {};

solution.findSum = function(tree) {
  if (typeof tree !== 'object') return null;
  let current = null;
  let newQ = new Queue();
  let result = 0;
  newQ.enqueue(tree);

  while(newQ.back) {
    current = newQ.dequeue();
    result += current.value;
    current.children.map(child => newQ.enqueue(child));
  }
  return result;
};