'use strict';

const solution = module.exports = {};

solution.iteratively = function(index) {
  if (typeof index !== 'number') return null;
  let arr = [0,1];

  for(let i=1; i < index; i++) {
    arr.push(arr[i-1] + arr[i]);
  }
  return arr[index];
};

solution.recursively = function(index) {
  if (typeof index !== 'number') return null;
  if(index === 0) return 0;
  if(index === 1) return 1;

  return solution.recursively(index - 2) + solution.recursively(index - 1);
};