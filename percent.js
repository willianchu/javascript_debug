const urlEncode = function(text) {
  // Put your solution here
  let trimText = text.trim();
  let stringArr = Array.from(trimText);
  console.log(stringArr);
  
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === ' ') {
      stringArr.splice(i, 1, `%20`);
    }
  }
  return stringArr.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("  Lighthouse Labs  "));
console.log(urlEncode("blue is greener than purple for sure"));