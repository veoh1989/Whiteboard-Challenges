'use strict';

exports.loop = function (count, cb) {
  if (typeof count !== 'number' || count < 0) return null;
  if (count === 0) {
    return;
  }
  cb();
  exports.loop (--count, cb);
}

// O(n)

// LOOP (3. callback)
  // IF: is count 0?
  // NO, count is not 0
  // callback runs
  // LOOP (2, callback)
    // IF: is count 0?
    // NO, count is not 0
    // callback is called
    // LOOP (1, callback)
      // IF: is count 0?
      // NO, count is not 0
      // callback is called
      // LOOP (0, callback)
        // IF: is count 0?
        // YES, count is 0
          // ok, return undefined
          //notes from Jordan

//while loop
//let loop = function (count, callback) {
//   while (count !== 0) {
//     callback();
//     count--;
//   }
//   return;
// }
// O(n)
          // LOOP (3, callback)
          // WHILE: is count still above 0?
          // YES, count is 3
            // callback runs
            // count is changed from 3 to 2
          // WHILE: is count still above 0?
          // YES, count is 2
            // callback runs
            // count is changed from 2 to 1
          // WHILE: is count still above 0?
          // YES, count is 1
            // callback runs
            // count is changed from 1 to 0
          // WHILE: is count still above 0?
          // NO, count is 0
          // ok, return undefined
          //notes from Jordan