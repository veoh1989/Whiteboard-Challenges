'use strict';

const solution = module.exports = {};

solution.anagramsSol = function(arr) {
  if (!arr || arr.length === 0) return 'Error';
  if (typeof arr !== 'object') return null;
  const anagrams = {};

  arr.map(x => {
    if (typeof x !== 'string') return;
    var sortedWord = x.split('').sort().join('');
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(x);
    }
    anagrams[sortedWord] = [x];
  });
  let sortedArray = [];
  for (let property in anagrams) {
    anagrams[property].map(x => sortedArray.push(x));
  }
  return sortedArray;
};