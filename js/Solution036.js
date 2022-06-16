//PREP
//We will receive a number representing a number of dogs
//We will return a certain string depending on the number of dogs received
//in case of 10 or less dogs return "Hardly any"
//in case of 50 or less dogs return "More than a handful!"
//in case of 100 or less, or 102 or more dogs, return "Woah that's a lot of dogs!"
//in case of 101 dogs return "101 DALMATIANS!!!"
//The number of dogs will be at least 1


/* 
function howManyDalmatians(number){
    if(number === 101){
      return "101 DALMATIANS!!!";
    } else if (number <= 10){
      return "Hardly any";
    } else if(number <= 50){
      return "More than a handful!";
    } else {
      return "Woah that's a lot of dogs!";
    }
} 
*/

//REFACTORED using a ternary conditional chain
function howManyDalmatians(number){
    return number === 101 ? "101 DALMATIANS!!!"
    : number <= 10 ? "Hardly any"
    : number <= 50 ? "More than a handful!"
    : "Woah that's a lot of dogs!";
  }


  //TESTS
  console.log(howManyDalmatians(26)); //Output: "More than a handful!"
  console.log(howManyDalmatians(8)); //Output: "Hardly any"
  console.log(howManyDalmatians(14)); //Output:  "More than a handful!"
  console.log(howManyDalmatians(80)); //Output: "Woah that's a lot of dogs!"
  console.log(howManyDalmatians(100)); //Output: "Woah that's a lot of dogs!"
  console.log(howManyDalmatians(101)); //Output: "101 DALMATIANS!!!"
