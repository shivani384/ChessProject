# ChessProject
chess Pieces and their movements

A simple chess project about the expected movements of its pieces in a empty 8*8 chess board consider the rows
from A,B,C---H and column from 1,2,3 ----8

Assumption : pawn cannot move diagonally since the board is empty

the project code is in JavaScript and for the testing purpose "Jest" has been used.

version-2

 a new file movement.mjs has been introduced which contains the differnt movements of piece  with
 given stepsize on the basic of which different Pieces file changes;
 
package.json changed also.

In es6 module approach import is used  in place of require;
and change the extension of file from .js to .mjs


for running the code use command:
npm start

a sample input of "E5 Queen" will run and give the output accordingly.


for running test use command:
npm test   (some es6 issue  arises file might not run)

