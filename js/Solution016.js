//PREP
//We will recieve an array of positive integers
//Also, we will recieve one other integer
//We have to compare if the average of the array is less than or greater than the other integer
//array will be called classPoints
//lone integer will be called yourPoints
//if the avg of classPoints is greater than yourPoints, return false, otherwise return true

function betterThanAverage(classPoints, yourPoints) {
    const initialValue = 0;
    const sumWithInitial = classPoints.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
    );
    
    if(sumWithInitial / classPoints.length > yourPoints){
      return false;
    } else {
      return true;
    }
  
  }