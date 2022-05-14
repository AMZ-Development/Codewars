//PREP
//take 2 integers, call them a and b
//return an array of all numbers in between, incluiding a and b
//a is always less than b( a < b)


function between(a,b){
    //declare a variable that contains an array
    let nums = [];
    //loop from a to b and insert into array
    for(let i = a; i <= b; i++){
        nums.push(i);
    }
    //return array
    return nums; 
}

console.log(between(1, 4)); //output: [1,2,3,4]
console.log(between(-2, 4)); //output: [-2,-1,0,1,2,3,4]

