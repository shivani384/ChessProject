

import { HorizontallyLeft, VerticalBackward, VerticalForward, HorizontalRight } from "../Moves/movement.mjs";
import { BoardLength } from "../board.mjs";
const rook = (row, column) => {
    let Stepsize = BoardLength;
    let LegalMoves = [...HorizontallyLeft(row, column, Stepsize),
    ...HorizontalRight(row, column, Stepsize),
    ...VerticalBackward(row, column, Stepsize),
    ...VerticalForward(row, column, Stepsize)
    ];



    return LegalMoves;
}

export default rook;