 
 
import Board from "../board.mjs"
 
 const bishop=(row,column)=>{

   const board=new Board();
    let LegalMoves = [];

     
    for (let NextRow=board.getIndexOfRow(row)+ 1, NextColumn = column - 1; NextRow <= board.getLastRowIndex() && NextColumn >= board.getFirstColumn(); NextRow++, NextColumn--)    
      LegalMoves.push(board.getRow(NextRow) + NextColumn);
        
    


 
    for (let NextRow =board.getIndexOfRow(row)+1, NextColumn = column + 1; NextRow <=board.getLastRowIndex() && NextColumn <= board.getLastColumn(); NextRow++, NextColumn++) 
        LegalMoves.push(board.getRow(NextRow)+ NextColumn);
      
 
    for (let NextRow = board.getIndexOfRow(row) - 1, NextColumn = column - 1; NextRow >= board.getFirstRowIndex() && NextColumn >= board.getFirstColumn(); NextRow--, NextColumn--) 
        LegalMoves.push( board.getRow(NextRow) + NextColumn);
   
    
    for (let NextRow = board.getIndexOfRow(row) - 1, NextColumn = column + 1; NextRow >=board.getFirstRowIndex() && NextColumn <= board.getLastColumn(); NextRow--, NextColumn++) 
        LegalMoves.push(board.getRow(NextRow) + NextColumn);
        
    



     
   return LegalMoves
 }
 export default bishop;