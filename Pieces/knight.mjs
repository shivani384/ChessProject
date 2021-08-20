import Board from "../board.mjs";
 
//import RowsOfBoard from "../board.mjs" 
const knight = (row, column) => {
  const board=new Board();
  let LegalMoves = [];
   
  let RowIncrementArray = [2, 2, -2, -2, 1, 1, -1, -1];   //expected row increments/decrements
  let ColumnIncrementArray = [1, -1, 1, -1, 2, -2, 2, -2];  //expected column increments/decrements
  let maxMoves = 8;
  for (let nextMove = 0; nextMove < maxMoves; nextMove++) {
    let NextMoveRow = String.fromCharCode(row.charCodeAt() + RowIncrementArray[nextMove]) //makes the expected increment in respected 
    // row from A---D
    let NextMoveColumn = column + ColumnIncrementArray[nextMove];     //makes the expected increment in respected columns from 1--8
 //checking for valid rows and columns
 
  if(board.IsValidRowColumn(row,column))
 {                                //combining row and column into string
      LegalMoves.push(NextMoveRow + NextMoveColumn);

    }
  }

  return LegalMoves;

}

export default knight;