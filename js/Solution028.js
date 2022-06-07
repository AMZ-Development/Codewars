//PREP
//We will receive a string
//We have to check if all the letters in the string are upper case
//If this is the case, return True, otherwise return False
//string may include other characters that are not letters

function uppercaseOrNot(str){
    //check if the whole string is lower case
    if(str == str.toLowerCase()){
        return 'False'
    } else{
    //if not lower case, then return 'True'
        return 'True'
    }
}

//CODEWARS Solution:
/* 
String.prototype.isUpperCase = function(){
  return this == this.toUpperCase();
}
*/

//TESTS
console.log(uppercaseOrNot('asdf')) //output: 'False'
console.log(uppercaseOrNot('#asdf')) //output: 'False'
console.log(uppercaseOrNot('#ASDF')) //output: 'True'
console.log(uppercaseOrNot('ASDDF')) //output: 'True'
