//PREP
//We will receive a month of the year(12) and should return to which quarter it belongs
//Month will be received as an integer, always positive and will never be 0 or greater than 12
//each quarter of the year is made up of 3 months each

const quarterOf = (month) => {
    //check if the month belongs which quarter by comparing its number to the number of the monthly quarters
    if(month <= 3){
      return 1;
    } else if (month <= 6){
      return 2;
    } else if (month <= 9){
      return 3;
    } else {
      return 4;
    }
    
  }
  
  //Test
  console.log(quarterOf(3)); //Output: 1
  console.log(quarterOf(12)); //Output: 4
  console.log(quarterOf(4)); //Output: 2