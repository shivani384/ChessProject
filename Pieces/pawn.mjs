import Board from "../board.mjs"
const pawn = (row, column) => {
    const board=new Board();
    let LegalMoves = [];
    if(!(board.getLastRow()==row))
    LegalMoves.push(board.getRow(board.getIndexOfRow(row)+1)+column);
 
    return LegalMoves;
}

export default pawn;