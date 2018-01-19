'use strict';

exports.traverse = function train(engine){
  let total = 0;

  if (!engine ) return null;
  if (typeof engine !== 'object') return null;

  for (let tmp = engine; tmp; tmp = tmp.next) {
    let keys = Object.keys(tmp);
    if (!keys.includes('value') || !keys.includes('next')) return null;
    if (typeof tmp.value !== 'number') return null;
    total += tmp.value;
  }
  return total;
};