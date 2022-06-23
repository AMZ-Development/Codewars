//PREP
//We will receive two parameters
//first we receive an array of integers
//second, we receive a number(integer)
//We have to return a cascading subset of the list of the size of the sexond parameter(integer number)


function eachCons(array, n) {
    return array.map((x, y) => array.slice(y, y + n)).filter(x => x.length == n);
  }
  

//tests
console.log(eachCons([3, 5, 8, 13], 2));  //output: [[3,5], [5,8], [8,13]]
console.log(eachCons([3, 5, 8, 13], 3));  //output: [[3,5,8], [5,8,13]]
