//PREP
//We will recieve an array of integers
//We will return the sum of the squares of all numbers


function squareSum(numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += (numbers[i] * numbers[i]);
    }
    return total;
}

//TEST
console.log(squareSum([1,2])) //Output: 5
console.log(squareSum([0,3,4,5])) //Output: 50
console.log(squareSum([])) //Output: 0