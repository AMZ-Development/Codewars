//PREP
//We will receive a NAME in a form of a string
//We have to return the following message: 'Hello, _', where _ is the name received in the string.

/* 
function sayHello(name){
    return `Hello, ${name}`
}
*/

//Refactored
const sayHello = (name) => `Hello, ${name}`


//TEST
console.log(sayHello('Mr. Spock')); //Output: 'Hello, Mr. Spock'
console.log(sayHello('Captain Kirk')); //Output: 'Hello, Captain Kirk'