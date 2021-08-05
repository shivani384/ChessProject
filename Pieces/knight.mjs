import { FirstColumn } from "../board.mjs";
import { LastColumn } from "../board.mjs";
import { LastRow } from "../board.mjs";
import { FirstRow } from "../board.mjs";

//import RowsOfBoard from "../board.mjs" 
const knight = (row, column) => {
  let LegalMoves = [];
  let RowIncrementArray = [2, 2, -2, -2, 1, 1, -1, -1];   //expected row increments/decrements
  let ColumnIncrementArray = [1, -1, 1, -1, 2, -2, 2, -2];  //expected column increments/decrements
  let maxMoves = 8;
  for (let nextMove = 0; nextMove < maxMoves; nextMove++) {
    let NextMoveRow = String.fromCharCode(row.charCodeAt() + RowIncrementArray[nextMove]) //makes the expected increment in respected 
    // row from A---D
    let NextMoveColumn = column + ColumnIncrementArray[nextMove];     //makes the expected increment in respected columns from 1--8

    if (NextMoveRow >= FirstRow && NextMoveRow <= LastRow && NextMoveColumn >= FirstColumn && NextMoveColumn <= LastColumn) //checking for valid rows and columns
    {                                      //combining row and column into string
      LegalMoves.push(NextMoveRow + NextMoveColumn);

    }
  }

  return LegalMoves;

}

export default knight;