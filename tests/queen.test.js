const { expect } = require("@jest/globals");
const {queen}=require("../Pieces/queen");

test("expected queen movements in 8*8 chess board",()=>{
    expect(queen('A',1)).toHaveLength(21);     // at each corner cases the expected movements of queen 
    expect(queen('H',1)).toHaveLength(21);     //would be 21
    expect(queen('A',8)).toHaveLength(21);
    expect(queen('H',1)).toHaveLength(21);

    //at middle case possible movements are 27
    expect(queen('D',4)).toHaveLength(27);

    //at border case expected movements are also 21
    expect(queen('A',4)).toHaveLength(21);


})