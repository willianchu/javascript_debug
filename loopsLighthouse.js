// Fixed
// for (var x = 100; x <= 200;++x) {
//   if (x % 3 === 0 && x % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (x % 3 === 0){
//     console.log("Loopy");
//   } else if (x % 4 === 0) {
//     console.log("Lighthouse");
//   } else {
//   console.log(x);
//   }
// }

for (i = 100; i <=200; i++) {
  answer = i % 3 === 0 && i % 4 === 0 ? "LoopyLighthouse" : i % 3 === 0 ? "Loopy" : i % 4 === 0 ? "Lighthouse" : i;
  console.log(answer);
}

// original student code
// for (var x = 100; x <= 200;++x) {
//   if (x % 3 === 0){
//     console.log("Loopy");
//   } else if (x % 4 === 0) {
//     console.log("Lighthouse");
//   } else if (x % 3 === 0 && x % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else {
//   console.log(x);
//   }
// }