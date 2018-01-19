'use strict';

exports.final = function finalArray(arr,arr2){
  if (!arr || !Array.isArray(arr)) return null;
  for (let i in arr) if (typeof arr[i] !== 'string') return null;

  var z = arr.filter(function(val) {
    return arr2.indexOf(val) != -1;
  });

  return z;

};