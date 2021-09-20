const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const temp = eqArrays(actual,expected);
  if (temp) {
    console.log(`😀😀 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`😖😖 Assertion Failed : ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;