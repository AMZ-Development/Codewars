//PREP
//we will recieve a positive integer that represents the number of petals in a flower
//according to this number, we should return the following:
/* 
-if the number of petals has a remainder of 1, return 'I love you'
-if the number of petals has a remainder of 2, return 'a little'
-if the number of petals has a remainder of 3, return 'a lot'
-if the number of petals has a remainder of 4, return 'passionately'
-if the number of petals has a remainder of 5, return 'madly'
-if the number of petals has a remainder of 6, return 'not at all'
*/

function howMuchILoveYou(nbPetals) {
    //check for the remainder
    if(nbPetals % 6 === 1){
      return ('I love you');
    }else if(nbPetals % 6 === 2){
      return ('a little');
    }else if(nbPetals % 6 === 3){
      return ('a lot');
    }else if(nbPetals % 6 === 4){
      return ('passionately');
    }else if(nbPetals % 6 === 5){
      return ('madly');
    }else{
      return ('not at all');
    }
  }

  //TESTS:
  console.log(howMuchILoveYou(15)); //output: 'a lot'
  console.log(howMuchILoveYou(7)); //output: 'I love you'
  console.log(howMuchILoveYou(10)); //output: 'passionately'
  console.log(howMuchILoveYou(25)); //output: 'I love you'