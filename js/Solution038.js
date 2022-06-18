//PREP
//We will write a function that returns a given string, n number of times
//The number of times repeated will be passed to the function as an integer, will never be less than 1
//repeat everything, even spaces

function repeatStr(n, s){
    //Declare an array where we will store the new string
    let newStr = [];
    //PUSH the passed string to the array the number of times stated in the parameters
    for(let i = 0; i < n; i++){
        newStr.push(s);
    }
    //Join the new array and return it
    return newStr.join('');
}

//TESTS
console.log(repeatStr(3, 'qwerty ')); //Output: 'qwerty qwerty qwerty '
console.log(repeatStr(4, '*/')); //Output: '*/*/*/*/'
console.log(repeatStr(5, '12 34')); //Output: '12 3412 3412 3412 3412 34'