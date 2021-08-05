
import { VerticalForward } from "../Moves/movement.mjs";
const pawn=(row,column)=>{
    let LegalMoves=[];
    
      LegalMoves=[...VerticalForward(row,column,Stepsize)];
     
    return LegalMoves;
}

export default pawn;