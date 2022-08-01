//PREP
//We receive a number
//return how many digits are in said number
//Number will only be positive or 0, never negative
//number will be integer



function digits(n) {
//declare where we will store the number of digits
    let total = 0;
//count how many digits are in the number passed, convert the number to a string to count each of them
    for(let i = 0; i < n.toString().length; i++){
        //add 1 to the total for each element of the string
      total++;
    }
//return the total number of elements(digits) in the passed number
    return total;
  }


//Tests
console.log(digits(12345)); //Output: 5
console.log(digits(1)); //Output: 1
console.log(digits(454256)); //Output: 6
console.log(digits(0)); //Output: 1
