const { expect } = require("@jest/globals");
 
const {king}=require("../Pieces/king");

test('king expected movement',()=>{
expect(king('H',8)).toHaveLength(3);// 4 corner cases of chess board
expect(king('H',1)).toHaveLength(3); // for checking if corner cases of chess board for king getting a 
expect(king('A',8)).toHaveLength(3); // array of length 3 or not
expect(king('A',1)).toHaveLength(3);

expect(king('A',5)).toHaveLength(5);   // at border gettingthe array of length 5 or not

expect(king('D',5)).toHaveLength(8);   // at middle getting the array of length 8 or not
   
    
})