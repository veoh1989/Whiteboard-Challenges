'use strict';

const solution = module.exports = {};

solution.rotate = function(arr) {
  if (!arr) return null;
  if (arr.length !== arr[0].length) return null;
  let arrReverse = arr.reverse();
  for (let i = 0; i < arrReverse.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = arrReverse[i][j];
      arrReverse[i][j] = arrReverse[j][i];
      arrReverse[j][i] = temp;
    }
  }
  return arrReverse;
};