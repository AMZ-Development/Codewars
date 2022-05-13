//PREP
//if boolean value (b) is true, return string 'true'
//else if boolean value (b) is false, return string 'false'

function booleanToString(b){
    //check if b is true
    if(b === true){
        return 'true';
      } else{               //check if b is not true
        return 'false';
      }
}


//tests
console.log(booleanToString(true)); //returns 'true'
console.log(booleanToString(false)); //returns 'false'
console.log(booleanToString(true)); //returns 'true'