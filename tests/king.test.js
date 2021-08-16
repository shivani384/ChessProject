import { expect } from "@jest/globals";
 
import king from "../Pieces/king.mjs";

test('king expected movement',()=>{
expect(king('H',8)).toEqual(expect.arrayContaining(
 ["H7","G7","G8"]));// 4 corner cases of chess board
 
 
expect(king('D',5)).toEqual(expect.arrayContaining([
            "E4","E5","E6","D4","D6","C4","C5","C6"
]));   // at middle getting the array of length 8 or not  
   


})