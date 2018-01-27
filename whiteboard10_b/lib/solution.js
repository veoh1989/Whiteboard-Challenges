'use strict';

exports.checkBraces = str => {
  if (typeof str !== 'string') return 'Invalid argument.';
  let arr = [];
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      arr.push('{');
      num++;
    }
    else if (str[i] === '}') {
      if (!arr.length) return 'Incorrect braces.';
      arr.pop();
    }
  }
  return !num ? 'Your string did not have any braces.' : !arr.length ? 'Your braces are correct.' : 'Incorrect braces.';
};