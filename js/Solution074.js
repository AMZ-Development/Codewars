//PREP
//We receive a boolean statement(true or false)
//In case of true, return the string 'Yes', otherwise return 'No'


let boolToWord = bool => bool == true ?  'Yes' : 'No';

//TESTS
console.log(boolToWord(true)); //Output: 'Yes'
console.log(boolToWord(false)); //Output: 'No'
