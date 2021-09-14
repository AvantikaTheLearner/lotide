const assertArraysEqual = function(actual, expected) {
  const temp = eqArrays(actual,expected);
  if (temp) {
    console.log(`😀😀 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`😖😖 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!((arr1.length === arr2.length) && (arr1[i] === arr2[i]))) {
      return false;
    }
  }
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1,"2", 3]);
assertArraysEqual(['1', 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 3]);
assertArraysEqual(["1"], ["1"]);
assertArraysEqual(["1"], [1]);