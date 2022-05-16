//PREP
//Find out if the number given is even
//The number can be integers or floats
//The number can be positive or negative
//In case of float, if the decimal part is not equal to zero, it is considered an uneven number
//return true if number is even

function testEven(n) {
    if(n % 2 === 0){  //Use modulo %2 to check if the number is even
      return true;    //if number % 2 is equal to 0, return true
    } else{           //if number % 2 is other than 0, return false
      return false;
    }
  }


  //tests
  console.log(testEven(34));  //output: true
  console.log(testEven(4.4));  //output: false
  console.log(testEven(-8));  //output: true
  console.log(testEven(-3));  //output: false