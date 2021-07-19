const { rook } = require("./Pieces/rook");
const {bishop}=require("./Pieces/bishop");
const {pawn}=require("./Pieces/pawn");
const {queen}=require("./Pieces/queen");
const {knight}=require("./Pieces/knight");
const {king}=require("./Pieces/king");

class Chess{
     
    
        constructor(RowColumn,Piece){
             this.row=RowColumn.charAt(0);   //gets the row from the given RowColumn string
             this.col=parseInt(RowColumn.charAt(1)); //gets the column from the given RowColumn string
             this.piece=Piece;
              
        }
        
    
    getInfo(){                    
         return{row:this.row,col:this.col, piece:this.piece}
    }
    getMoves(){
         if(this.row>='A'&&this.row<='H'&&this.col>=1&&this.col<=8)  //it checks the valid rows from A-D
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
const Checker=new Chess("E5","Queen");  //created a object Checker of type Chess with arguments
Checker.getMoves();                     //calls the getMoves() function with Checker object


