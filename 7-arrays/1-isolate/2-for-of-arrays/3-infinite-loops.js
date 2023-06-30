'use strict';

console.log('-- begin --');

/*

  careful! you can still get an infinite loop with for...of loops

*/

const allNumbers = [0];
for (const number of allNumbers) {
  if (allNumbers.length !== 10) {
    allNumbers.push(number + 1);
    console.log(allNumbers);
  } else break;
}

console.log('-- end --');
