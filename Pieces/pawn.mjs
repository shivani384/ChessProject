
import { VerticalForward } from "../Moves/movement.mjs";
const pawn = (row, column) => {
    let LegalMoves = [], Stepsize = 1;

    LegalMoves = [...VerticalForward(row, column, Stepsize)];

    return LegalMoves;
}

export default pawn;