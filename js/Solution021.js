//PREP
//We will recieve a string
//Each character, incluiding the spaces, have a value of 30
//We have to return the toal value of the string(total characters times 30)
//Do this challenge without using the '*' operator

function billboard(name, price = 30){
    let numOfLetters = name.length; //find out how many characters are in the string
    let total = 0;  //set a variable to get the total price
    //add 30 to the total for each character in order to not use the '*' operator
    for(let i = 1; i <= numOfLetters; i++){ 
      total = total + price;
    }
    return total;

  }

  //TEST
  console.log(billboard('hello world')); //output: 330


