//PREP
//We will receive a string
//We will write a function that capitalizes the first letter of the string
//String will never be empty


function capitalizeWord(word){
    return word.charAt(0).toUpperCase() +  word.slice(1);
}

//Tests
console.log(capitalizeWord('javaScript')); //Output: 'JavaScript'
console.log(capitalizeWord('hello')); //Output: 'Hello'