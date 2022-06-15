//PREP
//We will receive a number
//We will check if the number is even or odd
//In case of an even number, return product of the number times 8
//In case of an odd number, return product of the number times 9


const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9;

//TESTS
console.log(simpleMultiplication(3)); //Output: 27
console.log(simpleMultiplication(8)); //Output: 64
console.log(simpleMultiplication(9)); //Output: 81
console.log(simpleMultiplication(0)); //Output: 0
