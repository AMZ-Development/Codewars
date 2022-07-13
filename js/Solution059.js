//PREP
//We will receive a positive integer
//We have to return the nearest square number to that number

//First: We need to find the square root of the integer passed
//Second: Round the square root to the nearest integer
//Third: Multiply the resulting integer by itself to obtain the nearest square number

/* 
function nearestSq(n){
    let root = Math.sqrt(n);
    let roundedRoot = Math.round(root);
    let nearestSquare = roundedRoot * roundedRoot;

    return nearestSquare;
}
*/

//REFACTORED
let nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);


//Tests
console.log(nearestSq(10)); //Output: 9
console.log(nearestSq(111)); //Output: 121
console.log(nearestSq(9999)); //Output: 10000
console.log(nearestSq(2)); //Output: 1
