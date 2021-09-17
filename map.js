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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual([1, 2, 3], results1);
assertArraysEqual(['g','c','t','m','t'], results1);
assertArraysEqual(['a','c','t','p','t'], results1);
assertArraysEqual([1,'c',2,'m','t'], results1);

