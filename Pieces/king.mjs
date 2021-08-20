
import Board from "../board.mjs" 

const king = (row, column) => {
    const board=new Board();
    let LegalMoves = [];
    for(let NextRow=board.getIndexOfRow(row)-1;NextRow<=board.getIndexOfRow(row)+1;NextRow++)
    {    
                                                //both loops checks the maximum expected movements ==8
                                                
        for(let NextColumn=column-1;NextColumn<=column+1;NextColumn++)
        { 

         if(board.IsValidRowColumn(row,column)&&!(NextRow==board.getIndexOfRow(row)&&NextColumn==column))// checking for valid rows and column
                                                                      //and also neglecting where piece is kept
            LegalMoves.push(board.getRow(NextRow)+NextColumn);
        
    }
    }

    
     



    return LegalMoves;
}

export default king;