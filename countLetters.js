const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`😖😖 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let objCount = {};
  string = string.replace(/ /g, "");
  console.log(string);

  for (let str of string) {
    if (objCount[str]) {
      objCount[str] += 1;
    } else {
      objCount[str] = 1;
    }
  }
  return objCount;
};


console.log(countLetters("lighthouse in the house"));
