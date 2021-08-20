

 
import Board from "../board.mjs";
const rook = (row, column) => {
   let LegalMoves=[];
   const board= new Board();
  // console.log(Board.getFirstColumn()); 
     for(let HorizontalMove=board.getFirstColumn();HorizontalMove<=board.getLastColumn();HorizontalMove++){
         if(HorizontalMove==column)
         continue;
         LegalMoves.push(row+HorizontalMove);
    }
    for(let VerticalMove=board.getFirstRowIndex();VerticalMove<=board.getLastRowIndex();VerticalMove++){
        if(VerticalMove==board.getIndexOfRow(row))
        continue;
        LegalMoves.push(board.getRow(VerticalMove)+column);
   }
     



    return LegalMoves;
}

export default rook;