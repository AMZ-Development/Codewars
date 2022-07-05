//PREP
//We are given an array
//The elements of the array are arrays with two elements(integers)
//We must sum the first element and subtract the second element of each of the inner elements of the main array

let number = function(busStops){
    let totalPeople = 0;
    for(let i = 0; i < busStops.length; i++){
      totalPeople = (totalPeople + busStops[i][0]) - busStops[i][1];
    }
    return totalPeople;
  }

//TESTS
console.log(number([[10,0],[3,5],[5,8]])); //Output: 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); //Output: 17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); //Output: 21
console.log(number([[0,0]])); //Output: 0
