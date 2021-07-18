const { rook } = require("./Pieces/rook");
const {bishop}=require("./Pieces/bishop");
const {pawn}=require("./Pieces/pawn");
const {queen}=require("./Pieces/queen");
const {knight}=require("./Pieces/knight");
const {king}=require("./Pieces/king");

class Chess{
     
    
        constructor(RowColumn,Piece){
             this.row=RowColumn.charAt(0);
             this.col=parseInt(RowColumn.charAt(1));
             this.piece=Piece;
             this.output=[];
        }
        
   // let r=str.charAt(0);
   // let c=parseInt(str.charAt(1));
    //let output=[]
    getInfo(){
         return{row:this.row,col:this.col, piece:this.piece}
    }
    getMoves(){
         if(this.row>='A'&&this.row<='H'&&this.col>=1&&this.col<=8)
         this.ChessPieceMovement();
         else
         console.log("Invalid Row or Column");
    }
ChessPieceMovement(){

    switch(this.piece)
    {
        case"King":
        {
             
          console.log(king(this.row,this.col).toString());
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
           {  console.log("Invalid Piece");
            break;}
    }
    

}
};
const Checker=new Chess("E5","Queen");
Checker.getMoves();


