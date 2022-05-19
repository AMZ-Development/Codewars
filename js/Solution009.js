//PREP
//We are given a number, and should return it negative
//Numbers are floats or integers
//Number can already be negative, in this case, do nothing
//If number is 0, do nothing

/* 
function makeNegative(num){
//check if number is positive, return in negative form
if(num > 0){
    return -num;
} else{
//if number is 0 or already negative, return the same number
    return num;
}
} */

//Refactored
const makeNegative = (num) => num > 0 ? -num : num;


//TESTS
console.log(makeNegative(1)); //output: -1
console.log(makeNegative(0)); //output: 0
console.log(makeNegative(-4)); //output: -4
console.log(makeNegative(10)); //output: -10
console.log(makeNegative(-.21)); //output: -.21