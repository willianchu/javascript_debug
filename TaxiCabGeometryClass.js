class Position {
    constructor(x, y) {
    this.x = x;
    this.y = y;
    }
    move(distance, vector) {
        const [dx, dy] = vector.getDirection();
        this.x += dx * distance;
        this.y += dy * distance;
    }
}

class Vector {
    directions= [
    [0, 1], // north
    [1, 0], // east
    [0, -1], // south
    [-1, 0] // west
    ];
    constructor(dirIndex) {
        this.dirIndex = dirIndex;
    }

    getDirection() {
        return this.directions[this.dirIndex];
    }

    turnLeft() {
        this.dirIndex = (this.dirIndex + this.directions.length - 1) % this.directions.length;
    }

    turnRight() {
        this.dirIndex = (this.dirIndex + 1) % this.directions.length;
    }
}

const blocksAway = function(directions) {
    let position = new Position(0, 0);
    let vector = new Vector(0);
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


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

