const assertArraysEqual = require('../assertArraysEqual');
//const assertEqual = require('../assertEqual');
//const eqArrays = require('../eqArrays');
const tail = require('../tail');

//Test Cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
//const result = tail(["Hello", "Lighthouse", "Labs","House"]);
//const result = tail(["Hello"]);
//const result = tail([]);
console.log(result);
//assertEqual(eqArrays(result, ["Lighthouse", "Labs"]),true);
assertArraysEqual(result, ["Lighthouse", "Labs"]);
//assertEqual(result, []);