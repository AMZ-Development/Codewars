//PREP
//We will receive a string
//The string has to be converted to a number
//All strings passed will be a representation of an integral number


const stringToNumber = function(str){
//convert string to a number
    return Number(str);
}

console.log(stringToNumber("1945"));  //Output: 1945
console.log(stringToNumber("-846"));  //Output: -846
console.log(stringToNumber("56"));    //Output: 56
console.log(stringToNumber("0"));     //Output: 0