'use strict';

module.exports = function Stack() {
  let arr = [];

  this.push = function() {
    arr.push.apply(arr, arguments);
  };

  this.pop = function() {
    return arr.pop.apply(arr, arguments);
  };

  this.size = function() {
    return arr.length;
  };

  this.peek = function() {
    return arr;
  };
};