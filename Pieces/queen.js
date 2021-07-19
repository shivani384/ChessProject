const RowsOfBoard=require("../board").RowsOfBoard;

const bishop=require("./bishop").bishop;
const rook =require("./rook").rook;
const queen=(r,c)=>{
let LegalMoves=[];
 
LegalMoves=[...bishop(r,c),...rook(r,c)]; //adding the respected movements of bishop and rook in array 
                                          // LegalMoves

 
return LegalMoves;
}
exports.queen=queen;