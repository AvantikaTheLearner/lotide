const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😀😀 Assertion Passed ");
  } else {
    console.log("😖😖 Assertion Failed ");
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['1', 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1,"2", 3]), true);