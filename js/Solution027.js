//PREP
//We will receive a string of characters
//we have to return a new string, doubling each character
//each character will be case sensitive

function doubleChar(str) {
    //DECLARE the new string
    let newStr = '';
    //double each character in the received string and add it to the new string
    for(let i = 0; i < str.length; i++){
      newStr += str[i] + str[i];
    }
    //return the new string
    return newStr;
  }

  //TESTS
  console.log(doubleChar('123456')); //output: '112233445566'
  console.log(doubleChar('abcdef')); //output: 'aabbccddeeff'22
  