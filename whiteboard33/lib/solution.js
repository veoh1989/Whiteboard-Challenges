'use strict';

const solution = module.exports = {};

solution.sum = function(base, expo) {
  if(typeof base !== 'number' || typeof expo !== 'number') return 'Must be a number';
  let pow = Math.pow(base,expo);
  return pow.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
};