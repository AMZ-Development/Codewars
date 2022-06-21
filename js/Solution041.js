//PREP
//We will receive two arrays containing integers
//We will return a new array with the values of the other two arrays
//The new array will be sorted from least to greatest
//In case of repeated values(ints), only keep one


function mergeArrays(arr1, arr2) {
    let newArr =[];
    
    for(let i = 0; i < arr1.length; i++){
      newArr.push(arr1[i]);
    }
    
    for(let i = 0; i < arr2.length; i++){
      newArr.push(arr2[i]);
    }
    
    newArr.sort((a, b) => a - b);
    
    let arr = [...new Set(newArr)];
    
    return arr;
  }

  //TESTS
console.log(mergeArrays([1,2,3,4], [5,6,7,8])); //Output: [1,2,3,4,5,6,7,8]
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2])); //Output: [1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])); //Output:1,2,3,4,5,7,9,10,11,12]
