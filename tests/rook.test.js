import { expect } from "@jest/globals";
import  rook  from "../Pieces/rook.mjs";

test("expected rook movements in 8*8 chess board",()=>{
    //FROM CORNER CASES EXPECTED MOVEMENT
    expect(rook('A',1)).toEqual(expect.arrayContaining(["A2","A3","A4","A5","A6","A7","A8",
    "B1","C1","D1","E1","F1","G1","H1"]));
expect(rook('H',8)).toEqual(expect.arrayContaining(["H1","H2","H3","H4","H5","H6","H7",
"A8","B8","C8","D8","E8","F8","G8"]));

//from middle expected rook movement
 expect(rook('E',5)).toEqual(expect.arrayContaining(["E1","E2","E3","E4","E6","E7","E8",
"A5","B5","C5","D5","F5","G5","H5"]));
})