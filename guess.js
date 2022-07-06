let prompt = require("prompt-sync")();
let numPicked = Math.floor(Math.random() * 100);
let guessCount = 0;
let guesses = [];

console.log("Welcome to the number guessing game!");

while (true) {
  let numEntered = prompt("Guess a number: ");
  numEntered = Number(numEntered);
  if (isNaN(numEntered)) {
    console.log("Not a number! Try again!");
    continue;
  }
  if (guesses.includes(numEntered)) {
    console.log("Already Guessed!");
    continue;
  }
  if (!guesses.includes(numEntered)) {
    guesses.push(numEntered);
    guessCount++
    // console.log( (numEntered < numPicked) ? "Too low!" : "Too high!");
    if (numEntered < numPicked) {
      console.log("Too Low");
    } else if (numEntered > numPicked) {
      console.log("Too High");
    }
  }
  if (numEntered === numPicked) {
    console.log("Nice you guessed it! It took " + guessCount + " tries.");
    break;
  }
}