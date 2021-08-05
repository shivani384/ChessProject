let RowsOfBoard=require("../board").RowsOfBoard;
const rook=(r,c)=>{
   
 let LegalMoves=[];
  

for(i=1;i<=8;i++)            //for horizontal movements of rook  
{
    if(i==c)          
    continue;
  LegalMoves.push(r+i);
}

for( str of RowsOfBoard)   // for vertical movements of rook
{
    if(str==r)
    continue;
    LegalMoves.push(str+c);
}
  
    
  
   
    return LegalMoves;
}
exports.rook=rook;