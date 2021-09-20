const assertArraysEqual = require('../assertArraysEqual');
//const assertEqual = require('../assertEqual');
//const eqArrays = require('../eqArrays');

//Test Code
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(['1', 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1,"2", 3]), true);

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1,"2", 3]);