//PREP
//We will recieve an array
//we have to return the sum of the differences between consecutive pairs in descending order
//First, make the array go in descending order
//get the difference between the pairs
//return the sum of the differences

function sumOfDifferences(arr){
    //make array go in descending order 
    arr.sort((a, b) => b - a);
    //If we just take the difference of the highest number and the lowest number we will get the same result
    //as if we did the sum of the differences
    //return the difference of the highest number and lowest number
    return arr.length > 1 ? arr[0] - arr[arr.length - 1] : 0;
}

//TEST
console.log(sumOfDifferences([2,1,10])); //output: 9
console.log(sumOfDifferences([-3,-2,-1])); //output: 2
console.log(sumOfDifferences([0,0,0,0,0,0,0])); //output: 0
