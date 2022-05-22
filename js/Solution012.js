//PREP
//WE will get a number
//According to the english grammar, decide if the number of "things" used with that number will be plural or not
//for example, if we get a number 4, let's say we are talking about apples, 4 apples will be plural
//in case of number 1, 1 apple is singular
//The number can be an int or a floar
//if the number is INFINITE, it will be plural
//in case of 0, it will be plural
//if the number is plural return true, otherwise return false

/* function plural(n){
    //check for singular, only case of singular will be if we only have 1 of an item, example 1 apple.
    if(n === 1){
        return false;
    //all other cases we will have plural, check for something different than 1
    } else{
        return true;
    }
} */

//REFACTORED:
let plural = n => n !== 1 ? true : false;

//tests
console.log(plural(1)); //output: false
console.log(plural(0.5)); //output: true
console.log(plural(15)); //output: true
console.log(plural(Infinity)); //output: true