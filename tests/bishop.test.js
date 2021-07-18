const { expect } = require("@jest/globals");
const {bishop} =require("../Pieces/bishop");

test("expected movements of bishop in 8*8 chess board",()=>{
expect(bishop('A',1)).toHaveLength(7); //  daigonal case resultant must be 7 movements
expect(bishop('H',1)).toHaveLength(7); //  daigonal case resultant must be 7 movements

expect(bishop('H',8)).toHaveLength(7); // left daigonal case resultant must be 7 movements
expect(bishop('A',8)).toHaveLength(7); // left daigonal case resultant must be 7 movements
// middle case 
expect(bishop('E',5)).toHaveLength(13); // left daigonal case resultant must be 7 movements

// at border case contains possible 7 movements;
expect(bishop('A',6)).toHaveLength(7); // left daigonal case resultant must be 7 movements
})