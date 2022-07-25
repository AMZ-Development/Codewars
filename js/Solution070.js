//PREP
//Check if a passed value is Not A Number
//return true if it is NOT a number, otherwise return true
//undefined, and other characters should return false, as well as all numbers

const isReallyNaN = val => {
    return Number.isNaN(val);
}

//TEST
console.log(isReallyNaN({})); //Output: false
console.log(isReallyNaN(5)); //Output: false
console.log(isReallyNaN(NaN)); //Output: true
console.log(isReallyNaN('2')); //Output: false
