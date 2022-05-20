//PREP
//We are given two numbers
//Check if numbers are even or odd
//If one number is even and the other is odd, return true
//If both numbers are even or odd, return false


/* function opposites(num_1, num_2){
    //check if BOTH numbers are even OR BOTH numbers are odd
    if(num_1  % 2 === 0 && num_2 % 2 === 0 || num_1  % 2 !== 0 && num_2 % 2 !== 0){
        return false;
    //check if both numbers are opposite (One even and one odd)        
    } else {
        return true;
    }
} */

//Refactored
let opposites = (num_1, num_2) => num_1  % 2 === 0 && num_2 % 2 === 0 || num_1  % 2 !== 0 && num_2 % 2 !== 0 ? false : true;

//TESTS
console.log(opposites(1,3)); //output: false
console.log(opposites(0,3)); //output: true
console.log(opposites(4,4)); //output: false
console.log(opposites(17,13)); //output: false
console.log(opposites(7,4)); //output: true