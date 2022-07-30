//PREP
//We receive a number and have to return its factorial result
//for example: n = 4 , the function should multiply 4 * 3 * 2 * 1 and return the result (24)
//In case of the number received being 1 or 0, we will return 1
//we will not consider negative numbers

function factorial(n){
    if(n == 0 || n == 1){
      return 1;
    }
    
    for(let i = n -1; i > 0; i--){
      n *= i;
    }
    return n;
    
}


//TESTS
console.log(factorial(4)); //Output: 24
console.log(factorial(7)); //Output: 5040