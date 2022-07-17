//PREP
//We will receive a number
//We must return the closest number that is divisible by 10

/* 
const closestMultiple10 = num => {
    if(num % 10 >= 5){
      return num + 10 - (num % 10);
    } else {
      return num - (num % 10);
    }
  };
*/

//REFACTORED
const closestMultiple10 = num => num % 10 >= 5 ? num + 10 - (num % 10) : num - (num % 10);


//Tests
console.log(closestMultiple10(22)); //Output: 20
console.log(closestMultiple10(26)); //Output: 30
console.log(closestMultiple10(15)); //Output: 20
console.log(closestMultiple10(11)); //Output: 10