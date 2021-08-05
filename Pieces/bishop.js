const RowsOfBoard= require('../board').RowsOfBoard;
 
 const bishop=(r,c)=>{
    let LegalMoves=[];
    
    let index=RowsOfBoard.indexOf(r,0);// getting index of row in array of RowsOfColumn
   
    
    for(i=index+1,j=c+1;i<RowsOfBoard.length&&j<=8;i++,j++)
  {  
    LegalMoves.push(RowsOfBoard[i]+j)
   }
for(i=index-1,j=c-1;i>=0&&j>=1;i--,j--)
{  
    LegalMoves.push(RowsOfBoard[i]+j)
}
for(i=index+1,j=c-1;i<RowsOfBoard.length&&j>=1;i++,j--)
{  
    LegalMoves.push(RowsOfBoard[i]+j)
}
for(i=index-1,j=c+1;i>=0&&j<=8;i--,j++)
{  
    LegalMoves.push(RowsOfBoard[i]+j)
}
    
    return LegalMoves;
}
exports.bishop=bishop;
