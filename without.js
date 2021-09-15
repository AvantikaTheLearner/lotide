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

const without = function(sourceArray, itemsToRemoveArray) {
  let newArray = [];
  for (let entries in sourceArray) {
    if (!itemsToRemoveArray.includes(sourceArray[entries])) {
      newArray.push(sourceArray[entries]);
    }
  }
  return newArray;
};


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(words);
//console.log(without([1, 2, 3], [1]));
//console.log(without(["1", "2", "3"], [1, 2, "3"]));
//console.log(without(["1", "2", "3"], ["1", 2, "3"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);