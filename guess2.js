// dspinosa
// This is my first time posting; I was hoping to get through all the Katas without needing to post here but, alas, here I am. I’m having a problem I didn’t see on the forums. Here is my code for Number Guesser (Kata 21):

let prompt = require("prompt-sync")();

let secretNum = Math.floor(Math.random() * 100);

let counter = 0;

while(true) {
  let answer = prompt("Guess a number: ");
  answer = parseInt(answer);

  let prevGuesses = [];

  // code to send a message if a number is guessed again
  for (i = 0; i < prevGuesses.length; i++) {
    if (prevGuesses[i] === answer) {
      console.log("You guessed that already, silly! Try again!");
      continue;
    }
  }
  prevGuesses.push(answer);

  // evaluate guesses for being too high, too low, correct, or not a number
  if (answer > secretNum) {
    console.log("Too high!"); 
    counter += 1;
    prevGuesses.push(answer);
    continue;
  } else if (answer < secretNum) {
    console.log("Too low!");
    counter += 1;
    console.log("you tried ",prevGuesses.lenght, " times");
    continue;
  } else if (answer === secretNum) {
    console.log("Yay! You got it! You took " + counter + " attempts!");
    break;
  } else if (answer === NaN) {
    console.log("That's not a number, silly! Try again!");
    continue;
  } 

}