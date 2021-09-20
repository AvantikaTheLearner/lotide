const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test Cases
//console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));
//console.log(middle([1]));
//console.log(middle([1,2]));
//console.log(middle([1,2,3]));
assertArraysEqual(middle([1,2,3,4,5,6]), [1, 2, 3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3, 4]);
