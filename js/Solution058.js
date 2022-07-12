//PREP
//We will receive an array 
//The array will be made up of numbers, can be negative, zero, positives, ints or floats
//Array can also be empty
//Array will not contain any other characters that are not numbers
//We must return the sum of the elements of the array
//In case of an empty array, return 0

/* 
function sum (numbers) {
  let total = 0;
  total = numbers.reduce(( a, b) => a + b, 0);
  return total;    
};
*/

//REFACTORED
let sum = numbers => numbers.reduce((a, b) => a + b, 0);

//Tests
console.log(sum([])); //Output: 0
console.log(sum([1, 5.2, 4, 0, -1])); //Output: 9.2