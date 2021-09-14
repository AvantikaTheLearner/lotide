// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let temp = 0;
  for (let i = 0; i < actual.length; i++) {
    if ((actual.length === expected.length) && (actual[i] === expected[i])) {
      temp += 1;
    } else {
      break;
    }
  }
  if ((temp === actual.length) && (actual.length === expected.length)) {
    console.log(`😀😀 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`😖😖 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let arr = [];
  arr = array.slice(1);
  return arr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
//const result = tail(["Hello"]);
//const result = tail([]);
console.log(result);
assertEqual(result, ["Lighthouse", "Labs"]);
//assertEqual(result, []);