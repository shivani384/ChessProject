const RowsOfBoard=require("../board").RowsOfBoard;
const king=(r,c)=>{
    let LegalMoves=[];
    
    let index=RowsOfBoard.indexOf(r,0);  // getting the index of given row in array RowsOfBoard

    for(i=index-1;i<=index+1;i++)
    {    
                                                //both loops checks the maximum expected movements ==8
                                                
        for(j=c-1;j<=c+1;j++)
        { 

         if(i>=0&&i<RowsOfBoard.length&&j>=1&&j<=8&&!(i==index&&j==c))// checking for valid rows and column
                                                                      //and also neglecting where piece is kept
            LegalMoves.push(RowsOfBoard[i]+j);
        
    }
    }
   

return LegalMoves;
}
exports.king=king;