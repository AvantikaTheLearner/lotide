/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  /* IMPLEMENT ME */
  const mode = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        mode[arr[i]] += 1;
      } else {
        mode[arr[i]] = 1;
      }
    }
  }
  const objValueArray = Object.values(mode);
  let max = objValueArray[0];
  for (let i = 0; i < objValueArray.length; i++) {
    if (max < objValueArray[i]) {
      max = objValueArray[i];
    }
  }
  for (const [key, value] of Object.entries(mode)) {
    if (mode[key] === max) {
      return key;
    }
  }
};


console.log(mode([1,5,2,6,3,5]));