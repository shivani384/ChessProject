

import { BoardLength } from "../board.mjs";
import {
    HorizontallyLeft, HorizontalRight, VerticalBackward, VerticalForward, DiagonalLowerLeft, DiagonalLowerRight
    , DiagonalUpperLeft, DiagonalUpperRight
} from "../Moves/movement.mjs";

const queen = (row, column) => {
    let LegalMoves = [], Stepsize = BoardLength;

    LegalMoves = [
                   ...HorizontallyLeft(row, column, Stepsize),
                   ...HorizontalRight(row, column, Stepsize),
                   ...VerticalBackward(row, column, Stepsize),
                    ...VerticalForward(row, column, Stepsize),
                     ...DiagonalUpperLeft(row, column, Stepsize), 
                     ...DiagonalLowerRight(row, column, Stepsize),
                    ...DiagonalUpperRight(row, column, Stepsize), 
                     ...DiagonalLowerLeft(row, column, Stepsize)
                    ]


    return LegalMoves;
}

export default queen;