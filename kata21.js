let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber,'\n');
let answer = 0; // <<<<< Here to be visible
do {
  let prompt = require("prompt-sync")();
  answer = prompt("Guess a number from zero to 100: "); // remove let
  
  console.log('You entered: ' + answer);  
  console.log(answer !== randomNumber);

} while (parseInt(answer) !== randomNumber); 