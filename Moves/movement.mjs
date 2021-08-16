//const RowsOfBoard= require('../board.mjs').RowsOfBoard;
import { LastRowIndex } from '../board.mjs';
import { FirstColumn, LastColumn, FirstRow, LastRow, BoardLength, FirstRowIndex, RowsOfBoard } from '../board.mjs';

export const HorizontallyLeft = (Row, Column, StepSize) => {
    let LegalMoves = [];
    let Step = 0;


    for (let curColumn = Column - 1; curColumn >= FirstColumn && Step !== StepSize; curColumn--) {
        LegalMoves.push(Row + curColumn);

        Step++;
    }
    return LegalMoves;

}

export const HorizontalRight = (Row, Column, StepSize) => {


    let LegalMoves = [];
    let Step = 0;

    for (let curColumn = Column + 1; curColumn <= LastColumn && Step !== StepSize; curColumn++) {

        LegalMoves.push(Row + curColumn);

        Step++;
    }
    return LegalMoves;


}

export const VerticalForward = (Row, Column, StepSize) => {
    const LegalMoves = [];
    let CurrentRow = RowsOfBoard.indexOf(Row, 0);
    let Step = 0;
    for (let nextForwardRow = CurrentRow + 1; nextForwardRow <= LastRowIndex && Step != StepSize; nextForwardRow++) {
        LegalMoves.push(RowsOfBoard[nextForwardRow] + Column)
        Step++;
    }
    return LegalMoves;
}

export const VerticalBackward = (Row, Column, StepSize) => {
    let LegalMoves = [];
    let Step = 0;
    let CurrentRow = RowsOfBoard.indexOf(Row, 0);

    for (let nextBackwardRow = CurrentRow - 1; nextBackwardRow >= FirstRowIndex && Step != StepSize; nextBackwardRow--) {
        LegalMoves.push(RowsOfBoard[nextBackwardRow] + Column)

        Step++;
    }
    return LegalMoves;
}

export const DiagonalUpperLeft = (Row, Column, StepSize) => {
    let LegalMoves = [], Step = 0;

    let CurrentRow = RowsOfBoard.indexOf(Row, 0);
    for (let NextRow = CurrentRow + 1, NextColumn = Column - 1; NextRow <= LastRowIndex && NextColumn >= FirstColumn && Step != StepSize; NextRow++, NextColumn--) {
        LegalMoves.push(RowsOfBoard[NextRow] + NextColumn);
        Step++;
    }
    return LegalMoves;
}

export const DiagonalUpperRight = (Row, Column, StepSize) => {
    let LegalMoves = [], Step = 0;
    let CurrentRow = RowsOfBoard.indexOf(Row, 0);
    for (let NextRow = CurrentRow + 1, NextColumn = Column + 1; NextRow <= LastRowIndex && NextColumn <= LastColumn && Step != StepSize; NextRow++, NextColumn++) {
        LegalMoves.push(RowsOfBoard[NextRow] + NextColumn);
        Step++;
    }
    return LegalMoves;
}
export const DiagonalLowerLeft = (Row, Column, StepSize) => {

    let LegalMoves = [], Step = 0;
    let CurrentRow = RowsOfBoard.indexOf(Row, 0);
    for (let NextRow = CurrentRow - 1, NextColumn = Column - 1; NextRow >= FirstRowIndex && NextColumn >= FirstColumn && Step != StepSize; NextRow--, NextColumn--) {
        LegalMoves.push(RowsOfBoard[NextRow] + NextColumn);
        Step++;
    }

    return LegalMoves;
}
export const DiagonalLowerRight = (Row, Column, StepSize) => {

    let LegalMoves = [], Step = 0;
    let CurrentRow = RowsOfBoard.indexOf(Row, 0);
    for (let NextRow = CurrentRow - 1, NextColumn = Column + 1; NextRow >= FirstRowIndex && NextColumn <= LastColumn && Step != StepSize; NextRow--, NextColumn++) {
        LegalMoves.push(RowsOfBoard[NextRow] + NextColumn)
        Step++;
    }

    return LegalMoves;
}