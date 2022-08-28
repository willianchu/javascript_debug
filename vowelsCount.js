const numberOfVowels = function(data) {
  let vCounter = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      vCounter = ++vCounter;
    }
  }
  return vCounter
};

console.log(numberOfVowels("Congratulations"));