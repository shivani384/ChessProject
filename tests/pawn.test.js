const { expect } = require("@jest/globals");
const {pawn} =require("../Pieces/pawn");

test("expected pawn movements in 8*8 chess board",()=>{
    expect(pawn('H',1)).toHaveLength(0);  //at last row of chess board pawn can't move further
    expect(pawn('H',5)).toHaveLength(0);  //so the resultant array length must be zero

    expect(pawn('G',4)).toContain("H4");   //pawn can move from G row to H with array contained
                                           // value H4


 })