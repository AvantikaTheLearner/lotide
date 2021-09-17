const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (!((arr1.length === arr2.length) && (arr1[i] === arr2[i]))) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let arrKeys1 = Object.keys(object1);
  let arrKeys2 = Object.keys(object2);

  if (arrKeys1.length === arrKeys2.length) {
    let temp;
    for (let key of arrKeys1) {
      if ((Array.isArray(object1[key])) && (Array.isArray(object2[key]))) {
        const flag = eqArrays(object1[key], object2[key]);
        return flag;
      } else if (object1[key] === object2[key]) {
        temp = true;
      }
    }
    return temp;
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const temp = eqObjects(actual,expected);
  if (temp) {
    console.log(`😀😀 Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😖😖 Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);