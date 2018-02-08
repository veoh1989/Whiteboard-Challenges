'use strict';

const Queue = require('./queue');
const Sll = require('./sll');
const solution = module.exports = {};

solution.flatten = function(tree) {
  if (typeof tree !== 'object') return null;
  let current = null;
  let newQ = new Queue();
  let newL = new Sll();
  newQ.enqueue(tree);


  while(newQ.back) {
    current = newQ.dequeue();
    newL.insertEnd(current.value);
    current.children.map(child => newQ.enqueue(child));
  }

  return newL;
};