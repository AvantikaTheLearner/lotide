
const letterPositions = function(sentence) {
  //sentence = sentence.replace(/ /g, "");
  //console.log(sentence);

  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    //for your negative condition
    if (sentence[i] === " ") {
      continue;
    } else if (!result[sentence[i]]) {
      result[sentence[i]] = [i];
    } else {
      let temp = result[sentence[i]];
      temp.push(i);
      result[sentence[i]] = temp;
    }
  }
  
  return result;
};


console.log(letterPositions("lighthouse in the house"));