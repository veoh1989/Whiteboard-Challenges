'use strict';

const Queue = require('./queue');
const solution = module.exports = {};

solution.tree = function(root) {
  if (typeof root !== 'object') return null;
  let current = null;
  let newQ = new Queue();
  let result = [];
  newQ.enqueue(root);


  while(newQ.back) {
    current = newQ.dequeue();
    if(!current.children[0]) result.push(current.value);
    current.children.map(child => newQ.enqueue(child));
  }
  return result;
};