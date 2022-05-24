//PREP
//we will recieve 2 values
//both values will be integers, positive and never 0
//we will return a list of the multiples of the lowest integer up to the largest integer
//the smallest value will be called integer
//the largest value will be called limit
//if the largest value is not a multiple of the smallest value, do not include it in the returning list

function findMultiples(integer, limit) {
    //declare an array
    let arr = [];
    //find out how many values will be returned
    let totalMultiples = limit / integer;
    //check if the largest value is a multiple of the smallest one
    if(limit % integer === 0){
    //pass the values, up to the largest value, to the array
      for(let i = 1; i <= totalMultiples; i++){
        arr.push(i * integer);
      }
    //in case the largest value is not a multiple of the smallest one, omit passing it to the array
    } else{
      for(let i = 1; i < totalMultiples; i++){
        arr.push(i * integer);
      }
    }
    //return the list(array)
    return arr;
  }

  //TESTS
  console.log(findMultiples(4,16)); //output: [4,8,12,16]
  console.log(findMultiples(3,11)); //output: [3,6,9]
  console.log(findMultiples(5,30)); //output: [5,10,15,20,25,30]
  console.log(findMultiples(7,16)); //output: [7,14]
  