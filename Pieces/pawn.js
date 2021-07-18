const RowsOfBoard=require("../board").RowsOfBoard;
const pawn=(r,c)=>{
    let LegalMoves=[];
    
    let index=RowsOfBoard.indexOf(r,0); // getting the index of row from the array of RowsOfColumn
    
    if(index!==7)  // checks for valid row 
    LegalMoves.push(RowsOfBoard[index+1]+c);  // row+col will be pushed as a string in array Legalmoves
     
    return LegalMoves;
}
exports.pawn=pawn;