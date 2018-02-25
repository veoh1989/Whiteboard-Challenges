'use strict';

const solution = module.exports = {};

solution.rotate = function(arr) {
}

// Rotate +90
function rotate90(matrix) {

  matrix = transpose(matrix);
  matrix.map(function(array) {
    array.reverse();
  });

  return matrix;
}


  // Create empty matrix
function createEmptyMatrix(len) {
  var result = new Array();
  for (var i = 0; i < len; i++) {
    result.push([]);
  }
  return result;
}

  // Transpose the matrix
function transpose(matrix) {
  // make empty array
  var len = matrix.length;
  var result = createEmptyMatrix(len);

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      var temp = matrix[i][j];
      result[j][i] = temp;
    }
  }
  return result;
}


var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

  // +90 degress Rotation Tests
var test = rotate90(array);
console.log(test);
