const RowsOfBoard=require("../board").RowsOfBoard;

const bishop=require("./bishop").bishop;
const rook =require("./rook").rook;
const queen=(r,c)=>{
let LegalMoves=[];
//let r="E";
//let c=5;
//let index=RowsOfBoard.indexOf(r,0);
LegalMoves=[...bishop(r,c),...rook(r,c)];

//console.log(LegalMoves);
return LegalMoves;
}
exports.queen=queen;