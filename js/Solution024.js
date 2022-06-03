//PREP
//We will receive an array
//We will have to return a new array with every second element removed
//Array will never be empty

function removeEveryOther(arr){
    //declare a new array
    let newArr = [];
    //remove every second element and put the remaining elements into the new array
    for(let i = 0; i < arr.length; i += 2){
        newArr.push(arr[i]);
    }
    return newArr;
}

//TEST
console.log(removeEveryOther([1,2,3,4,5,6,7,8,9])); // Output: [1,3,5,7,9]