//PREP
//We have to define an XOR function that takes two parameters
//The two parameters will be expressions that have to be evaluated to true or false
//An XOR function returns true if only ONE of the expressions is true
//In case of both expressions being true, or both being false, XOR returns false

//The sintax for XOR operator is: a ^ b;

//XOR truth table:
/* 
      a  |    b    |   a XOR b
   ------|---------|----------
      0  |    0    |     0
   ------|---------|----------
      0  |    1    |     1
   ------|---------|----------
      1  |    0    |     1
   ------|---------|----------
      1  |    1    |     0
*/



//function
const xor = (a, b) => a ^ b == 0 ? false : true;



//TESTS
console.log(xor(false, false)); //Output: false
console.log(xor(true, true)); //Output: false
console.log(xor(false, true)); //Output: true
console.log(xor(true, false)); //Output: true