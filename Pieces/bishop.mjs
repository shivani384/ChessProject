 
import { BoardLength } from "../board.mjs";
import { DiagonalUpperLeft,DiagonalUpperRight,DiagonalLowerRight,DiagonalLowerLeft } from "../Moves/movement.mjs";
 const bishop=(row,column)=>{
    let LegalMoves=[...DiagonalUpperLeft(row,column,BoardLength),
        ...DiagonalLowerRight(row,column,BoardLength),
        ...DiagonalUpperRight(row,column,BoardLength),
        ...DiagonalLowerLeft(row,column,BoardLength)
                   ];
    
   return LegalMoves
 }
export default bishop;