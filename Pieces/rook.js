let RowsOfBoard=require("../board").RowsOfBoard;
const rook=(r,c)=>{
   
 let LegalMoves=[];
  //  let r='E';
   // let c=5;

for(i=1;i<=8;i++)              
{
    if(i==c)
    continue;
  LegalMoves.push(r+i);
}

for( str of RowsOfBoard)
{
    if(str==r)
    continue;
    LegalMoves.push(str+c);
}
  
    
   // for( str of LegalMoves)
   // console.log(LegalMoves);
   
    return LegalMoves;
}
exports.rook=rook;