//PREP
//We will recieve an integer
//Check if the integer is even or odd

let even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';

//TESTS
console.log(even_or_odd(3)); //Output: 'Odd';
console.log(even_or_odd(0)); //Output: 'Even';
console.log(even_or_odd(-2)); //Output: 'Even';