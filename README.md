# ChessProject
chess Pieces and their movements

A simple chess project about the expected movements of its pieces in a empty 8*8 chess board consider the rows
from A,B,C---H and column from 1,2,3 ----8

Assumption : pawn cannot move diagonally since the board is empty
           

the project code is in JavaScript and for the testing purpose "Jest" has been used.

version-2
 a new file movement.mjs has been introduced which contains the differnt movements of piece  with
 given stepsize on the basic of which different Pieces file changes;
 
 
 es6 module approach import is used  in place of require;


for running the code use command:
npm start
(the input (E5,"Queen") will be run and gives the output accordingly)

dependencies require for testing

1 npm install –save-dev jest
(we only want Jest for development purposes)
2 npm install @babel/core @babel/node –save-dev
(we want babel to help us in a node.js environment)
3 npm install @babel/preset-env –save-dev
(using presets you can target a specific environment for compiling)

set the environment preset in .babelrc file

{ "presets": [ "@babel/preset-env" ] }

make file jest.config.json set the values.



for running test use command:
npm test   (some es6 issue  arises)
