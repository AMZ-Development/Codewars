//PREP
//We will write a function and it will have two parameters
//First parameter will be a string(named body)
//Second parameter will be a single letter(named tail)
//We have to return true if the letter(tail) corresponds to the last letter on the first parameter(body)
//OTHERWISE return false

function correctTail(body, tail){
    let sub = body.slice(body.length - 1);
    if(sub == tail){
      return true;
    }
    else{
      return false;
    }
  }

  /* 
  //REFACTORED Solution

  let correctTail = (body, tail) => body.slice(body.length - 1) === tail ? true : false

  */

  //TESTS
  console.log(correctTail('Fox' , 'x')); //Output: true
  console.log(correctTail('Rhino' , 'x')); //Output: false
  console.log(correctTail('Meerkat' , 't')); //Output: true