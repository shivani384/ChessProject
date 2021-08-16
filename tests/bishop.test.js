import  { expect } from "@jest/globals";
import bishop from "../Pieces/bishop.mjs";

test("expected movements of bishop in 8*8 chess board",()=>{
expect(bishop('A',1)) .toEqual(expect.arrayContaining([
           "B2","C3","D4","E5","F6","G7","H8"
])); //  daigonal case resultant must be 7 movements
 
expect(bishop('E',5)).toEqual(expect.arrayContaining([
             "F4","G3","H2","D6","C7","B8","F6","G7","H8","D4","C3","B2","A1"
]));  

 

})