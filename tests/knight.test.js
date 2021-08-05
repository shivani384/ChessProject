const { expect } = require("@jest/globals")
const {knight} = require("../Pieces/knight")

test("expected movements of knight in 8*8 chess board",()=>{

    expect(knight('A',1)).toEqual(expect.arrayContaining(["B3","C2"])); //Knight  at corner case containing
                                                                     // expected array elements B3,C2 

    expect(knight('H',8)).toEqual(expect.arrayContaining(["G6","F7"]));  //same as above corner case 
    //Knight at middle position case;
    expect(knight('E',5)).toEqual(expect.arrayContaining(["G6", "G4", "C6", "C4", "F7", "F3", "D7", "D3"]));
    // Knight at Border of chess Board;
     expect(knight('A',3)).toEqual(expect.arrayContaining( ["C4", "C2", "B5", "B1"]));    

     
})                                                                      
                                                                        