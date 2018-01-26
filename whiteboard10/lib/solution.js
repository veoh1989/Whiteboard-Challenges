'use strict';

exports.binarySearch = (arr, n) => {
  if (!Array.isArray(arr) || typeof n !== 'number') return 'Invalid argument.';
  let start = 0;
  let end = arr.length - 1;
  let mid = ~~((start + end) / 2);
  while (n !== arr[mid] && start < end) {
    if (n > arr[mid]) start = mid + 1;
    if (n < arr[mid]) end = mid - 1;
    mid = ~~((start + end) / 2);
  }
  return start > end || arr[mid] !== n ? `Your item ${n} is not in the array.` : `Your item ${n} is at index ${mid}.`;
};