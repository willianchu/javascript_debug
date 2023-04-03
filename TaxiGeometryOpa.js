const blocksAway = function(directions) {
  let x = 0; // <<<< Initialize x 
  let y = 0; // <<<< Initialize y
  let previousStep = '';
  let newStep = '';
  let rightWay = '';
  let leftWay = '';
  let i = 0; // <<<< Initialize i
  let output = {east: 0, north: 0};
// first step
  if ( directions[0] === 'right') {
    newStep = 'right'; // <<<< typo mistake
    rightWay = 'east';
    x = x + directions[i + 1];
  } else if ( directions[0] === 'left') {
    newStep = 'right';
    leftWay = 'north';
    y = y + directions[i + 1];
  } 
  console.log("first step: " + newStep + " " + rightWay + " " + leftWay);
  console.log("position: " + x + " " + y);
// further steps
  for (i = 2 ; i < directions.length ; i += 2) {
    
    if (newStep === 'right' && rightWay === 'east') {
      previousStep = 'east';
      x = x + directions[i + 1];
    } else if (newStep === 'right' && rightWay === 'west') {
      previousStep = 'west';
      x = x - directions[i - 1];
    } else if (newStep === 'right' && rightWay === 'north') {
      previousStep = 'north';
      y = y + directions[i + 1];
    } else if (newStep === 'right' && rightWay === 'south') {
      previousStep = 'south';
      y = y - directions[i - 1];
    }
    if (newStep === 'left' && leftWay === 'east') {
      previousStep = 'east';
      x = x + directions[i + 1];
    } else if (newStep === 'left' && leftWay === 'west') {
      previousStep = 'west';
      x = x - directions[i - 1];
    } else if (newStep === 'left' && leftWay === 'north') {
      previousStep = 'north';
      y = y + directions[i + 1];
    } else if (newStep === 'left' && leftWay === 'south') {
      previousStep = 'south';
      y = y - directions[i - 1];
    }
    if (previousStep === 'north') {
        rightWay = 'east';
        leftWay = 'west';
      } else if (previousStep === 'south') {
        rightWay = 'west';
        leftWay = 'east';
      } else if (previousStep === 'west') {
        rightWay = 'north';
        leftWay = 'south';
      } else if (previousStep = 'east') {
        rightWay = 'south';
        leftWay = 'north';
      } 
      console.log("second step: " + newStep + " " + rightWay + " " + leftWay);
      console.log("position: " + x + " " + y);
  } 
  console.log("final",x, y);
  output.east = x;
  output.north = y;
  return output;
}
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));