'use strict';

const utils = module.exports = {};

utils.map = function (arr, cb){
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    result.push(cb(element));
  }

  return result;
};


utils.filter = function(arr, cb) {
  let result =[];

  for(let j= 0; j < arr.length; j++) {
    if (cb(arr[j]) === true) result.push(arr);
  }
  return result;
};


utils.reduce = function (arr, cb) {
  let result = arr[0];

  for(let j= 1; j < arr.length; j++) {
    result = cb(result, arr[j]);
  }
  return result;
};