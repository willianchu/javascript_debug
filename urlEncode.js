const urlEncode = function(text) {
  let start = text[0] == ' ' ? 1 : 0;
  let end = text[text.length - 1] == ' ' ? text.length - 1 : text.length;
  let result = "";
  for (let i = start; i < end; i++) {
    if (text[i] === " ") {
      result += "%20";
    } else {
      result += text[i];
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));