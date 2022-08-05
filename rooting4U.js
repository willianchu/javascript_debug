
const judgeVegetable = function (vegetables, metric) {
  let winner = {name: "", redness: 0, plumpness: 0};
  for (let i = 0; i < vegetables.length; i++) {
    if (metric === "redness" && vegetables[i].redness > winner.redness) {
      winner = vegetables[i];
    } else if (metric === "plumpness" && vegetables[i].plumpness > winner.plumpness) {
      winner = vegetables[i];
    }
  }
  return winner.name;
};
// original student code
// const judgeVegetable = function (vegetables, metric) {
//   const keys = Object.keys(vegetables);   // remove this keys
//   let winner = "" // update this to store max value
//   for (let i = 0; i < keys.length; i++) { // substitute keys for vegetables
//     if (metric === "redness" && ) { // update to also compare redness value
//       vegetables.submitter = winner; // update to store the winner
//     } else if (metric === "plumpness" && ) { // update to also compare plumpness value
//       vegetables.submitter = winner; // update to store the winner
//     }
//   }
//  return winner;
// };

vegetables = [
  { name: "celery", redness: 8, plumpness: 5 },
  { name: "kale", redness: 11, plumpness: 10 },
  { name: "broccoli", redness: 9, plumpness: 18 }
]
console.log(judgeVegetable(vegetables, "redness")); // "kale"
console.log(judgeVegetable(vegetables, "plumpness")); // "broccoli"	