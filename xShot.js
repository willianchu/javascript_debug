const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = (moves) => {
  let answer = []
  let x = 0;
  let y = 0;
  for(let move of moves) {
    
    if(move == 'north') { // she was comparing the whole array instead of just the current move
      x++; // she was using an verbose excess of x++ syntax
      console.log(x);
    } 
    else if(move == 'south') {
      x--;
    }
    else if(move == 'west') {
      y++;
    }
    else if(move == 'south'){
      y--;
    }
  }
  answer.push(x,y) 
  return answer
}
console.log(finalPosition(moves));