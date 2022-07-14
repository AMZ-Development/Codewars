//PREP
//We will receive three numbers, integers and always positive
//Check if the first number is divisible by the second AND third number
//If divisible, return true, otherwise return false

/* 
function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0){
      return true;
    } else {
      return false;
    }
  }
*/

//REFACTORED
let isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false;

//Tests
console.log(isDivisible(3,3,4)); //Ouput: false
console.log(isDivisible(12,3,4)); //Ouput: true
console.log(isDivisible(8,3,4)); //Ouput: false
console.log(isDivisible(48,3,4)); //Ouput: true