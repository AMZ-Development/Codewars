//PREP
//we will recieve two integers
//we have to find the largest number and divide it by the smallest number
//we have to return the remainder
//in case of division by 0, return NaN

/* function remainder(n, m){ 
    //check for largest number and return the remainder
    if(n > m){
      return n % m;
    } else{
      return m % n;
    }
  }
 */

  //REFACTORED:
  let remainder = (n, m) => n > m ? n % m : m % n;


  //TESTS
  console.log(remainder(5,12)); //output: 2
  console.log(remainder(25,12)); //output: 1
  console.log(remainder(55,0)); //output: NaN
  console.log(remainder(4,3)); //output: 1