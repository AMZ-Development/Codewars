//PREP
//We will receive an array
//The array will be made up of INTEGERS only
//We will return a new array, with each element of the original array DOUBLED


function maps(x){
    const maps2 = x.map(x => x*2);
    return maps2;
}


//TESTS
console.log(maps([1, 2, 3])); //Output: [2, 4, 6]
console.log(maps([4, 1, 5])); //Output: [8, 2, 10]
console.log(maps([3, 2, 3, 8])); //Output: [6, 4, 6, 16]
