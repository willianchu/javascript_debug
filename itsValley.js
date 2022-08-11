function itsValleys(arr) {
  let isDescending = true;
  let lastValue = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < lastValue) {
      // is descending
      if(isDescending === false) {
        return false;
      }
      lastValue = arr[i];
    } else if(arr[i] > lastValue) {
      // is climbing
      isDescending = false;
      lastValue = arr[i];
    } else {
      // is a plateau
      continue;
    }
  }
  return true;
}

function itsValleys(arr) {
  let isDescending = true;
  let lastValue = arr[0];
  
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < lastValue) {
      // is descending
      if(isDescending === false) {
        return false;
      }
      lastValue = arr[i];
    } else if(arr[i] > lastValue) {
      // is climbing
      isDescending = false;
      lastValue = arr[i];
    }
  }
  return true;
}


let valley = [9,8,7,6,5,5,4,3,2,2,1,2,3,3,4,5,6,7,8,9];

console.log(itsValleys(valley));