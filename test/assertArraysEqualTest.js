const assertArraysEqual = require('../assertArraysEqual');

//Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1,"2", 3]);
assertArraysEqual(['1', 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 3]);
assertArraysEqual(["1"], ["1"]);
assertArraysEqual(["1"], [1]);