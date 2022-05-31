//PREP
//Write a function that takes in a number and returns an array
//the returning array will include all the powers of 2 with exponent ranging from 0 to the received number
//the number will always be a positive integer


function powersOfTwo(n){
    let powersTwo = [];
  
    for(let i = 0; i <= n; i++){
      let result = Math.pow(2,i);
      powersTwo.push(result);
    }
  return powersTwo;
}

//TESTS
console.log(powersOfTwo(0)); //output: [1]
console.log(powersOfTwo(2));  //output: [1, 2]
console.log(powersOfTwo(4));  //output: [1, 2, 4]