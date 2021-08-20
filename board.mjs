  

/*export const RowsOfBoard=['A','B','C','D','E','F','G','H'];
export const FirstColumn=1;
export const LastColumn=8;
export const FirstRow='A';
export const FirstRowIndex=0;
export const LastRowIndex=7;
export const LastRow='H';
export const BoardLength=8;*/

//exports.RowsOfBoard=RowsOfBoard;
export default  class Board{
    constructor()
    {
   this.RowsOfBoard=['A','B','C','D','E','F','G','H'];
   this.FirstRow='A';
   this.LastRow='H';
   this.FirstRowIndex=0;
   this.LastRowIndex=7;
   this.FirstColumn=1;
   this.LastColumn=8;
   this.BoardLength=8;
    }

    getBoardLength(){
        return this.BoardLength;
    }
    getRow(index){
      return this.RowsOfBoard[index];
    }
   getIndexOfRow(row){
      return this.RowsOfBoard.indexOf(row, 0); 
   } 
   IsValidRowColumn(row,column){
     return (row>=this.FirstRow&&row<=this.LastRow)&&(column>=this.FirstColumn&&column<=this.LastColumn)
   }
   getFirstRow(){
       return this.FirstRow;
   }
   getLastRow(){
       return this.LastRow;
   }
   getFirstRowIndex(){
       return this.FirstRowIndex;
   }

   getLastRowIndex(){
       return this.LastRowIndex;
   }

   getFirstColumn(){
       return this.FirstColumn;
   }
    getLastColumn(){
        return this.LastColumn;
    }
    
}