const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`😖😖 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object,value) {
  let array = Object.entries(object);
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] === value) {
      return array[i][0];
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);