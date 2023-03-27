class Position {
  constructor(x, y) {
  this.x = x;
  this.y = y;
  }
  move(distance, vector) {
      const [dx, dy] = vector.getDirection();
      this.x += dx * distance;
      this.y += dy * distance;
      console.log("moved",this.x,this.y,vector.dirIndex);
  }
}
const DIRECTIONS = [
  North: [0, 1], // north
  East: [1, 0], // east
  South: [0, -1], // south
  West: [-1, 0] // west
];

class Vector {
  directions= [
  [0, 1], // north
  [1, 0], // east
  [0, -1], // south
  [-1, 0] // west
  ];
  constructor(dirIndex, position) {
      this.dirIndex = dirIndex;
      this.x = position.x;
      this.y = position.y;
  }

  getDirection() {
      return this.directions[this.dirIndex];
  }

  turnLeft() {
      // if the cab is running at X axis(0) heading North there is no left, go forward north
      console.log("turnLeft",this.x,this.y,this.dirIndex);
      if(this.x === 0 && this.y === 0 && this.dirIndex === 0) {
          this.dirIndex = 1;
      } else { 
      this.dirIndex = (this.dirIndex + this.directions.length - 1) % this.directions.length;
      }
  }

  turnRight() {
      // if the cab is running at X axis(0) heading South there is no right go forward south
      console.log("turnRight",this.x,this.y,this.dirIndex);
      if(this.x === 0 && this.dirIndex === 2 && this.y !== 0) {
          this.dirIndex = 2;
      } else // if the cab is running at X axis(0) heading South and hit y(0) axis, there is no right neither go forward (error)
      if(this.x === 0 && this.dirIndex === 2 && this.y === 0) {
        this.console.log("the Cab hit a wall!!!");
        // exit program
        exit();
      } else {
      this.dirIndex = (this.dirIndex + 1) % this.directions.length;
      }
  }
  
}

const blocksAway = function(directions) {
  let position = new Position(0, 0);
  let firstDirection = directions[0] === "right" ? 1 : 0; // 0 = north, 1 = east
  let vector = new Vector(firstDirection,position); // load vector with first direction
  for (let i = 0; i < directions.length; i += 2) {
      const turnDirection = directions[i];
      const distance = directions[i + 1];
      if (turnDirection === "left") {
          vector.turnLeft();
      } else {
          vector.turnRight();
      }
      position.move(distance,vector);
  }

  return { east: position.x, north: position.y };
};


// console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));