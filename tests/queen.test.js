const { expect } = require("@jest/globals");
const {queen}=require("../Pieces/queen");

test("expected queen movements in 8*8 chess board",()=>{


    expect(queen('A',1)).toEqual(expect.arrayContaining(
        ["A2","A3","A4","A5","A6","A7","A8",
    "B1","C1","D1","E1","F1","G1","H1",
    "B2","C3","D4","E5","F6","G7","H8"]));     // at each corner cases the expected movements of queen 
                                              //would be 21
    

    //at middle case possible movements are 27
    expect(queen('D',4)).toEqual(expect.arrayContaining(
        [ "E4","F4","G4","H4","C4","B4","A4","D1","D2","D3","D5","D6","D7","D8"
    ,"E3","F2","G1","C5","B6","A7","C3","B2","A1","E5","F6","G7","H8"]));
     

    
})