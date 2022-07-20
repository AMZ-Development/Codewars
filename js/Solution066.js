//PREP
//We are reviewing somebody else's code, we need to fix it
/* 
CODE:
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}
*/
//The code should return the string "Hello, my love!" if the person's name is Johnny
//Any other name should return "Hello, personsName!"




let greet = name => name == "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;


//TESTS
console.log(greet("Jim")); //Output: "Hello, Jim!"
console.log(greet("Matt")); //Output: "Hello, Matt!"
console.log(greet("Johnny")); //Output: "Hello, my love!"