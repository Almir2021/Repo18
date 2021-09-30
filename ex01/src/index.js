 let myArr = [];
 // Only change code below this line
  function* multiplication(x) {
      for (var for1 = 0; for1<x ; for1++) {
            yield x *(for1+2);
            myArr.push(x); 
      }
  }

   var num = multiplication(3);

   for (let multiplication of num ) {
       console.log (multiplication);
   }



// Only change code above this line

module.exports = multiplication;

