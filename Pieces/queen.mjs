

import rook from "./rook.mjs";
import bishop from "./bishop.mjs"
 

const queen = (row, column) => {
    let LegalMoves = [];  

    LegalMoves = [...rook(row,column),...bishop(row,column)];
                    
                    


    return LegalMoves;
}

export default queen;