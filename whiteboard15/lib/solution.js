'use strict';

const Queue = require('../lib/queue');
const solution = module.exports = {};

solution.tree = function(root) {
  if (typeof root !== 'object') return null;
  let current = null;
  let newQ = new Queue();
  let result = [];
  newQ.enqueue(root);

  while(newQ.back) {
    current = newQ.dequeue();
    newQ = current.root;
    if(!current.children) result.push(current.value);
    //console.log(current.root);
    current.children.map(child => newQ.enqueue(child));
  }
  return result;
};