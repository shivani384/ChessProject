const RowsOfBoard=require("../board").RowsOfBoard;
const king=(r,c)=>{
    let LegalMoves=[];
    //let r='E';
    //let c=5;
    let index=RowsOfBoard.indexOf(r,0);

    for(i=index-1;i<=index+1;i++)
    {    
        
        for(j=c-1;j<=c+1;j++)
        {

         if(i>=0&&i<RowsOfBoard.length&&j>=1&&j<=8&&!(i==index&&j==c))
            LegalMoves.push(RowsOfBoard[i]+j);
        
    }
    }
   // console.log(LegalMoves);

return LegalMoves;
}
exports.king=king;