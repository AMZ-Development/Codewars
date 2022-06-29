//PREP
//We are given two integers
//integers can be positive, negative or 0
//We will return the total sum of the numbers that  are in between(our given numbers included)
//In case of equal numbers, return just one of them
//Given integers are not in order


function getSum(a, b){
    //declare a variable to store our total
    let total = 0;
    //find the max int and lowest int, and sum them and every int between them
    for(let i = Math.max(a, b); i >= Math.min(a, b); i--){
        total += i;
    }
    //return the total of the sum
    return total;
}


//TESTS
console.log(getSum(1, 4)); //Output: 10
console.log(getSum(-1, 3)); //Output: 5
console.log(getSum(1, 1)); //Output: 1
console.log(getSum(3, -1)); //Output: 5
