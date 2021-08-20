import rook from "./Pieces/rook.mjs";
import bishop from "./Pieces/bishop.mjs";
import pawn from"./Pieces/pawn.mjs";
import queen from "./Pieces/queen.mjs"
import knight from "./Pieces/knight.mjs";
import king from "./Pieces/king.mjs";
import Board from "./board.mjs";

class Chess{
     
    
        constructor(RowColumn,Piece){
             this.board=new Board();
             this.row=RowColumn.charAt(0);   //gets the row from the given RowColumn string
             this.col=parseInt(RowColumn.charAt(1)); //gets the column from the given RowColumn string
             this.piece=Piece;
              
        }
        
    
    getInfo(){                    
         return{row:this.row,col:this.col, piece:this.piece,board:this.board}
    }
    getMoves(){
         if(this.board.IsValidRowColumn(this.row,this.col))  //it checks the valid rows from A-D
                                                                     // and columns from 1-8 otherwise sends 
                                                                     // the error message 
         this.ChessPieceMovement();                               
         else
         console.log("Invalid Row or Column");
    }
ChessPieceMovement(){

    switch(this.piece)
    {
        case"King":
        {
             
          console.log(king(this.row,this.col).toString());   //this function return the array of string then conveted to string
         break;

        }
        case"Queen":
        {
          console.log(queen(this.row,this.col).toString()); 
          break;
        }
        case"Bishop":
        {
          console.log(bishop(this.row,this.col).toString());
          break;
   
        }
        case"Rook":
        {
          console.log(rook(this.row,this.col).toString());
          break;
   
        }
        case"Knight":
        {
          console.log(knight(this.row,this.col).toString());
          break;
        }
        case"Pawn":
        {
   console.log(pawn(this.row,this.col).toString());
         break;
        }
        default:
           {  console.log("Invalid Piece"); //if the piece doesn't spell corrected it also show this 
                                            // error message
            break;}
    }
    

}
};
const Checker=new Chess("E5","Pawn");  //created a object Checker of type Chess with arguments
Checker.getMoves();                     //calls the getMoves() function with Checker object


