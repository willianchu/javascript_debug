const generateBoard = function(white, black) {
  //Return nested array representing board, containing location of two queens
  // Set initial array
  let board = [];
  let position;
  for (let i = 0; i < 8; i++) {
    //8 nested arrays 
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      //Number 0 for all spots on board 
      board[i][j] = 0;
    }
  }
  console.log(board);
  position = board;
  //Establish position of Queens 
  position[white[0]][white[1]] = 1;
  position[black[0]][black[1]] = 1;
  return position;
  }
  
  
  const queenThreat = function() {
  //Indicate whether or not the two queens can attack each other
  //Check rows & columns 
  if (white[0] === black[0] || white[1] === black[1]) {
    return true;
  } 
  //Check diagonal right & left 
  if () {
  
  }
  return false;
  }
  
  
  
  let white = [0, 5];
  let black = [5, 0];
  let generatedBoard = generateBoard(white, black);
  console.log(generatedBoard);
  console.log(queenThreat(generatedBoard));
  
  white = [0, 0];
  black = [5, 7];
  generatedBoard = generateBoard(white, black);
  console.log(generatedBoard);
  console.log(queenThreat(generatedBoard));