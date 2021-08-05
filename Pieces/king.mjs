
import {
    HorizontallyLeft, HorizontalRight, VerticalForward, VerticalBackward, DiagonalUpperLeft,
    DiagonalUpperRight, DiagonalLowerRight, DiagonalLowerLeft
} from "../Moves/movement.mjs";


const king = (row, column) => {
    let LegalMoves = [], StepSize = 1;
    
    LegalMoves = [...HorizontallyLeft(row, column, StepSize),
                  ...HorizontalRight(row, column, StepSize), 
                  ...VerticalForward(row, column, StepSize),
                  ...VerticalBackward(row, column, StepSize),
                  ...DiagonalLowerLeft(row, column, StepSize),
                  ...DiagonalLowerRight(row, column, StepSize),
                  ...DiagonalUpperLeft(row, column, StepSize),
                  ...DiagonalUpperRight(row, column, StepSize)
                   ];



    return LegalMoves;
}

export default king;