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

const middle = function(array) {
  let middleElementsArray = [];
  let mid = Math.ceil(array.length / 2);
  if (!(array.length < 3)) {
    if (array.length % 2 === 0) {
      middleElementsArray.push(array[mid - 1]);
      middleElementsArray.push(array[mid]);
    } else {
      middleElementsArray.push(array[mid - 1]);
    }
  }
  return middleElementsArray;
};

//console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));
//console.log(middle([1]));
//console.log(middle([1,2]));
//console.log(middle([1,2,3]));
assertArraysEqual([1, 2, 3], [1, 2, 3]);