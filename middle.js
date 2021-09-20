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

module.exports = middle;