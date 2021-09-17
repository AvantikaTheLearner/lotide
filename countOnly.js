const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀 Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`😖😖 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let objCount = {};

  for (let item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (objCount[item]) {
        objCount[item] += 1;
      } else {
        objCount[item] = 1;
      }
    }
  }
  return objCount;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
