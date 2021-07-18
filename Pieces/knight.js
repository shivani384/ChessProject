 
const knight=(r,c)=>{
let LegalMoves=[];
let RowArray=[2,2,-2,-2,1,1,-1,-1];   //expected row increments/decrements
let ColArray=[1,-1,1,-1,2,-2,2,-2] ;  //expected column increments/decrements
  
    for(i=0;i<8;i++)
    {   let temp=String.fromCharCode(r.charCodeAt() +RowArray[i] ) //makes the expected increment in respected 
                                                                  // row from A---D
        let temp2=c+ColArray[i];     //makes the expected increment in respected columns from 1--8
        if(temp>='A'&&temp<='H'&&temp2>=1&&temp2<=8) //checking for valid rows and columns
      {  let res= temp+temp2;                        //combining row and column into string
         LegalMoves.push( res);
        
      } 
    }
   
return LegalMoves;
 
}
exports.knight=knight;
