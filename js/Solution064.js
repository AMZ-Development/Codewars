//PREP

//We will receieve two numbers, can be positive, 0 or negative
//In case of a 0 or a negative number, return 0
//Otherwise return the result of the multiplication of the two numbers

/* 
function paperwork(n, m) {
    if(n <= 0 || m <= 0){
      return 0;
    } else {
      return n * m;
    }
  }
*/
  
//Refactored
let paperwork = (n, m) => n <= 0 || m <= 0 ? 0 : n * m;

console.log(paperwork(2, 5)); //Output: 10
console.log(paperwork(-2, 5)); //Output: 0
console.log(paperwork(2, 0)); //Output: 0
console.log(paperwork(1, 5)); //Output: 5