const camelCase = function(input) {
  let strs = "";
  for(let i = 0; i < input.length; i++){
    if(input[i] === " "){
      strs += input[++i].toUpperCase();
    } else {
      strs += input[i];
    }
  }
  return strs;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));